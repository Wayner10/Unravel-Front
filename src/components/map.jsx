import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
  MapControl,
  ControlPosition,
} from "@vis.gl/react-google-maps";
import { useTypeContext } from "../context/TypeProvider";
import "../styles/map.css";

function MapComponent(props) {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Cargar los datos de los lugares desde la API
  useEffect(() => {
    fetch("http://localhost:4000/api/places")
      .then((response) => response.json())
      .then((data) => {
        setPlaces(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error al cargar los datos");
        setLoading(false);
      });
  }, []);

  const types = useTypeContext();

  const containerStyle = {
    width: "100%",
    height: "100vh", // Cambia la altura según lo que necesites
  };

  // Centro del mapa, ajustado según el área de interés
  const center = {
    lat: Number.isFinite(parseFloat(props.lat)) ? parseFloat(props.lat) : 0,
    lng: Number.isFinite(parseFloat(props.lng)) ? parseFloat(props.lng) : 0,
  };

  const handleMarkerClick = (place) => {
    setSelectedPlace(place); // Almacenar lugar seleccionado
  };

  const handleInfoWindowClose = () => {
    setSelectedPlace(null); // Cerrar InfoWindow
  };

  // Función para importar íconos de forma dinámica
  function importAll(r) {
    let images = {};
    try {
      r.keys().map((item) => {
        images[item.replace("./", "")] = r(item);
      });
    } catch (error) {
      console.error("Error importing icons:", error);
    }
    return images;
  }

  // Importar íconos SVG
  const images = importAll(require.context("../images/icons", false, /\.svg$/));

  // Función para validar si las coordenadas son números válidos
  const isValidCoordinate = (latitude, longitude) => {
    const isLatitudeValid =
      Number.isFinite(latitude) && latitude >= -90 && latitude <= 90;
    const isLongitudeValid =
      Number.isFinite(longitude) && longitude >= -180 && longitude <= 180;

    // Asegúrate de que los valores no sean NaN
    return (
      !isNaN(latitude) &&
      !isNaN(longitude) &&
      isLatitudeValid &&
      isLongitudeValid
    );
  };

  // Mostrar estado de carga o error
  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="map" style={containerStyle}>
      {/* Cargar el mapa con Google Maps API */}
      <APIProvider apiKey="AIzaSyDjBY_AhQBJzbKlxA9695hUepkwPQYTYLQ">
        <Map
          mapId="571f6a8c4ae80bc9"
          style={{ width: "100%", height: "100%" }}
          defaultCenter={center}
          defaultZoom={10}
        >
          <MapControl position={ControlPosition.CENTER}>
            {/* Marcadores y ventanas de información */}
            {places.map((place) => {
              const lat = Number(place.place_lat);
              const lng = Number(place.place_lng);

              // Verificar si las coordenadas son válidas
              if (
                isValidCoordinate(lat, lng) &&
                place.region_id === props.region
              ) {
                return (
                  <AdvancedMarker
                    key={place.place_id}
                    position={{ lat: lat, lng: lng }}
                    title={place.place_name || "No Name"}
                    onClick={() => handleMarkerClick(place)}
                  >
                    <img
                      src={
                        images[
                          `${types
                            .find(
                              (type) =>
                                type.place_type_id === place.place_type_id
                            )
                            .place_type_desc.toLowerCase()}.svg`
                        ]
                      }
                      width={50}
                      height={50}
                      alt={place.place_name}
                    />
                  </AdvancedMarker>
                );
              }

              // Asegúrate de que siempre devuelves algo
              return null; // Devolver null si las condiciones no se cumplen
            })}{" "}
            cuando se selecciona un lugar */}
            {selectedPlace && (
              <InfoWindow
                headerContent={
                  <h2 className="info-window-title">
                    {selectedPlace.place_name}
                  </h2>
                }
                position={{
                  lat: Number(selectedPlace.place_lat),
                  lng: Number(selectedPlace.place_lng),
                }}
                onCloseClick={handleInfoWindowClose}
              >
                <div>
                  <p>
                    <strong>Puntuación:</strong> {selectedPlace.place_score}
                  </p>
                  <p>
                    <strong>Cantón:</strong> {selectedPlace.place_canton}
                  </p>
                  <p>
                    <strong>Ciudad Más Cercana:</strong>{" "}
                    {selectedPlace.place_nearest_city}
                  </p>
                  <button
                    onClick={() =>
                      navigate(`/detalle/${selectedPlace.place_id}`)
                    }
                  >
                    Ver más detalles
                  </button>
                </div>
              </InfoWindow>
            )}
          </MapControl>
        </Map>
      </APIProvider>
    </div>
  );
}

export default MapComponent;
