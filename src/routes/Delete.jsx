import React, { useEffect, useState } from "react";
import '../routes/Delete.css'
import { usePlaceContext } from '../context/PlaceProvider';


function Delete({ onDelete, onCancel, isEnabled, place_id }) {
  const { getPlace} = usePlaceContext();
  const [place, setPlace] = useState({});

    //* - - - </> [DATA] </> - - - *//
    const fetchPlace = async (id) => {
      try
      {
          //* - - - </> [DATA] </> - - - *//
          const data = await getPlace(id);
          setPlace(data);
      }
      catch (error)
      {
          //* - - - </> [ERROR] </> - - - *//
          console.log(error);
          throw error;
      }
  }
  
  //* - - - </> [DATA] </> - - - *//
  useEffect(() => {
      
      fetchPlace(place_id);
  
  }, []);
  

  return (
    <div className="delete-modal-overlay">
      <div className="delete-modal">
        <h2>Confirmación de Estado</h2>
        <p>
          {place.place_status ? "¿Quieres deshabilitar el lugar?" : "¿Deseas habilitar el lugar?"}
        </p>
        <div className="delete-modal-buttons">
          <button className="delete-modal-confirm" onClick={onDelete}>
            Confirmar
          </button>
          <button className="delete-modal-cancel" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}



export default Delete