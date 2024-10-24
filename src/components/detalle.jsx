import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importar useParams
import '../styles/detalle.css';

function Detalle() {
  const { placeId } = useParams(); // Obtener el parámetro de la URL
  const [placeDetail, setPlaceDetail] = useState(null);

  // Fetch de los detalles del lugar basado en el nombre
  useEffect(() => {
    fetch(`http://localhost:4000/api/places/${placeId}`)
      .then((response) => response.json())
      .then((data) => setPlaceDetail(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [placeId]);

  return (
    <div className="detalle">
      {placeDetail ? (
        <>
          <h2 className="h2-detalle">{placeDetail.place_name}</h2>
          <p><strong>Descripción:</strong> {placeDetail.place_desc}</p>
          <p><strong>Puntuación:</strong> {placeDetail.place_score}</p>
          <p><strong>Precio Adulto:</strong> {placeDetail.place_price_adult}</p>
          <p><strong>Precio Niño:</strong> {placeDetail.place_price_children}</p>
          <p><strong>Cantón:</strong> {placeDetail.place_canton}</p>
          <p><strong>Ciudad Más Cercana:</strong> {placeDetail.place_nearest_city}</p>
          <p>
            <a href={placeDetail.place_waze_url} target="_blank" rel="noopener noreferrer">
              Waze
            </a>
          </p>
          <p>
            <a href={placeDetail.place_google_url} target="_blank" rel="noopener noreferrer">
              Google
            </a>
          </p>
          <p>
            <a href={placeDetail.place_website_url} target="_blank" rel="noopener noreferrer">
              Website
            </a>
          </p>
          <p><strong>Hora de Apertura:</strong> {placeDetail.place_open_time}</p>
          <p><strong>Hora de Cierre:</strong> {placeDetail.place_close_time}</p>
          
          {/* Mostrar la imagen si se proporciona una URL */}
          {placeDetail.place_image_url && ( // Asegúrate de que esta propiedad exista en el objeto placeDetail
            <div style={{ marginTop: '10px' }}>
              <img 
                src={placeDetail.place_image_url} 
                alt="Imagen del lugar" 
                style={{ maxWidth: '100%', height: 'auto' }} 
              />
            </div>
          )}
        </>
      ) : (
        <p>Cargando detalles...</p>
      )}
    </div>
  );
}

export default Detalle;
