import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom"; 
import "../styles/map.css";

function Map(props) {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  // Obtener lugares desde una API
  useEffect(() => {
    fetch("http://localhost:4000/api/places")
      .then((response) => response.json())
      .then((data) => {
        setPlaces(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const navigate = useNavigate();

  // Definir el estilo del contenedor del mapa
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  // Definir la posición inicial del mapa usando las props
  const position = {
    // lat: Number.isFinite(parseFloat(props.lat)) ? parseFloat(props.lat) : 0,
    // lng: Number.isFinite(parseFloat(props.lng)) ? parseFloat(props.lng) : 0,
   
    lat: 9.19, lng: -83.75
  };

  // Manejar clic en un marcador (para navegación a detalles)
  const seeMore = (placeId) => {
    navigate(`/detalle/${placeId}`);
  };

  // // Opciones del mapa, incluido el `mapId`
  // const mapOptions = {
  //   mapId: "571f6a8c4ae80bc9", // Reemplazar con tu ID de mapa
  //   zoomControl: true, // Puedes ajustar más opciones si lo deseas
  // };



  return (
    <div className="map">
      {/* Mostrar las coordenadas actuales */}
      <p>Latitud: {position.lat}</p>
      <p>Longitud: {position.lng}</p>
    
      {/* Cargar Google Map con API Key y Map ID */}
      <LoadScript googleMapsApiKey="AIzaSyDjBY_AhQBJzbKlxA9695hUepkwPQYTYLQ&beta">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={position}
          zoom={11}
          options={{
            restriction: {
              latLngBounds: { north: 11.22,  // Latitud norte de Costa Rica
                south: 5.57,   // Latitud sur de Costa Rica
                east: -82.68,  // Longitud este de Costa Rica
                west: -85.73,  // Longitud oeste de Costa Rica\
              },
              strictBounds: true
            }
          }} // Pasamos el mapId y otras opciones aquí
        >
          {/* Renderizar marcadores en el mapa */}
          {places.map(
            (place) =>
              place.region_id === props.region && (
                <Marker
                  key={place.place_id}
                  position={{
                    lat: Number(place.place_lat),
                    lng: Number(place.place_lng),
                  }}
                 onClick4={() => setSelectedPlace(place)}
                  title={place.place_name || "No Name"}
                />
              )

              
          )}

          {/* Mostrar InfoWindow cuando se selecciona un lugar */}
          {selectedPlace && (
            <InfoWindow
              position={{
                lat: Number(selectedPlace.place_lat),
                lng: Number(selectedPlace.place_lng),
              }}
              onCloseClick={() => setSelectedPlace(null)}
            >
              <div>
                <h2 onClick={() => seeMore(selectedPlace.place_id)}>{selectedPlace.place_name}</h2>
                <p><strong>Puntuación:</strong> {selectedPlace.place_score}</p>
                <p><strong>Cantón:</strong> {selectedPlace.place_canton}</p>
                <p><strong>Ciudad Más Cercana:</strong> {selectedPlace.place_nearest_city}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;
