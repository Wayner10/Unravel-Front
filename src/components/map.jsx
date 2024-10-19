import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import "../styles/map.css";

function Map(props) {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const navigate = useNavigate();

  // Cargar los datos de los lugares desde la API
  useEffect(() => {
    fetch("http://localhost:4000/api/places")
      .then((response) => response.json())
      .then((data) => {
        setPlaces(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const containerStyle = {
    width: "100%",
    height: "600px", // Cambia la altura según lo que necesites
  };

  // Centro del mapa, ajustado según el área de interés
  const center = {
    lat: Number.isFinite(parseFloat(props.lat)) ? parseFloat(props.lat) : 0,
    lng: Number.isFinite(parseFloat(props.lng)) ? parseFloat(props.lng) : 0,
  };

  const handleMarkerClick = (placeId) => {
    navigate(`/detalle/${placeId}`);
  };

  return (
    <div className="map">
      {/* Mostrar valores para verificar que los props están bien */}
      <p>Latitud: {center.lat}</p>
      <p>Longitud: {center.lng}</p>
      {/* Cargar el mapa con Google Maps API */}
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11}
        >
          {places.map(
            (place) =>
              place.region_id === props.region && (
                <Marker
                  key={place.place_id}
                  position={{
                    lat: Number(place.place_lat),
                    lng: Number(place.place_lng),
                  }}
                  onClick={() => handleMarkerClick(place.place_id)}
                  title={place.place_name || "No Name"}
                />
              )
          )}
          {selectedPlace && (
            <InfoWindow
              position={{
                lat: Number(selectedPlace.place_lat),
                lng: Number(selectedPlace.place_lng),
              }}
              onCloseClick={() => setSelectedPlace(null)}
            >
              <div>
                <h2>{selectedPlace.place_name}</h2>
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
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;
