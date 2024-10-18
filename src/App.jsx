import "./App.css";
import Navbar from "./components/navbar";
import Map from "./components/map";
import Map2 from "./components/map2";
import Map3 from "./components/map3";
import Home from "./components/home";
import About from "./components/about";
import Places from "./components/places";
import Detalle from "./components/detalle"; // Asegúrate de importar el componente Detalle
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, useCallback, useMemo } from "react";

//* - - - </> [DATA] </> - - - *//
import Regions from "./api/Regions";

function App() {
  //* - - - </> [DATA] </> - - - *//
  const [regions, setRegions] = useState([]);

  //* - - - </> [DATA] </> - - - *//
  const regionService = useMemo(() => new Regions(), []); // Se inicializa solo una vez

  //* - - - </> [DATA] </> - - - *//
  const getData = useCallback(async () => {
    const regionData = await regionService.getRegions();
    setRegions(regionData);
  }, [regionService]); // Ahora 'regionService' es estable

  useEffect(() => {
    getData();
  }, [getData]); // 'getData' es estable debido al uso de useCallback

  console.log(regions);

  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/places" element={<Places />} />
            <Route path="/map" element={<Map />} />
            <Route path="/map2" element={<Map2 />} />
            <Route path="/map3" element={<Map3 />} />
            
            {/* Ruta para Detalle, usando :placeName como parámetro de URL */}
            <Route path="/detalle/:placeId" element={<Detalle />} />

            {/* Renderizamos las rutas para cada región */}
            {regions.map((item) => (
              <Route
                key={item.region_id}
                path={`/${item.region_id}`}
                element={
                  <Map region={item.region_id} lat={item.region_lat} lng={item.region_lng} />
                }
              />
            ))}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
