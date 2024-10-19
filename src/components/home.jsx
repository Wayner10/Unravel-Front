import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
//* - - - </> [DATA] </> - - - *//
import Regions from '../api/Regions';

function Home() {
  //* - - - </> [DATA] </> - - - *//
  const [regions, setRegions] = useState([]);
  const navigate = useNavigate(); // Hook para navegar entre rutas

  // Envolver regionService con useMemo para evitar recrearlo en cada renderizado
  const regionService = useMemo(() => new Regions(), []);

  //* - - - </> [DATA] </> - - - *//
  const getData = useCallback(async () => {
    const regionData = await regionService.getRegions();
    setRegions(regionData); // Actualiza el estado con los datos obtenidos
  }, [regionService]);

  //* - - - </> [DATA] </> - - - *//
  useEffect(() => {
    getData();
  }, [getData]);  // Añadimos getData a la lista de dependencias para evitar advertencias de ESLint

  console.log(regions); // Imprime las regiones en la consola para verificación

  //* - - - </> [LINK] </> - - - *//
  const seeMore = (id) => {
    navigate(`/${id}`); // Navega a la página de detalle con el id de la región
  };

  return (
    <>
      {regions.map((item, index) => (
        //* - - - </> [BUTTON] </> - - - *//
        <button
          className='button-region'
          key={index}
          onClick={() => seeMore(item.region_id)} // Evento onClick para navegar a la página de detalle
        >
          {item.region_name} {/* Muestra el nombre de la región */}
        </button>
      ))}
    </>
  );
}

export default Home;
