import React, { useState, useEffect } from 'react';
import Prueba from '../video/Prueba.mp4';
import '../styles/places.css'; // Asegúrate de que esta hoja de estilos esté bien conectada

function Places() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/places')
      .then(response => response.json())
      .then(data => {
        setPlaces(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="layout-container">
      <div className="grid-container">
        {places.map(place => (
          <div className="grid-item" key={place.place_id}>
            <h2>{place.place_name}</h2>
            <p><strong>Descripción:</strong> {place.place_desc}</p>
            <p><strong>Puntuación:</strong> {place.place_score}</p>
            <p><strong>Precio Adulto:</strong> {place.place_price_adult}</p>
            <p><strong>Precio Niño:</strong> {place.place_price_children}</p>
            <p><strong>Latitud:</strong> {place.place_lat}</p>
            <p><strong>Longitud:</strong> {place.place_lng}</p>
            <p><strong>Cantón:</strong> {place.place_canton}</p>
            <p><strong>Ciudad Más Cercana:</strong> {place.place_nearest_city}</p>
            <p><a href={place.place_waze_url} target="_blank" rel="noopener noreferrer">Waze</a></p>
            <p><a href={place.place_google_url} target="_blank" rel="noopener noreferrer">Google</a></p>
            <p><a href={place.place_website_url} target="_blank" rel="noopener noreferrer">Website</a></p>
            <p><strong>Hora de Apertura:</strong> {place.place_open_time}</p>
            <p><strong>Hora de Cierre:</strong> {place.place_close_time}</p>
            <p><strong>Tipo de Lugar:</strong> {place.place_type_id}</p>
            <p><strong>Región:</strong> {place.region_id}</p>
            <p><strong>Usuario:</strong> {place.user_id}</p>
          </div>
        ))}
      </div>
      <div className="video-section">
          <video width="100%" controls>
            <source src={Prueba} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    </div>
  );
}

export default Places;
