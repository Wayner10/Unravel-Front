import React, { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    // Initialize and add the map
    function initMap() {
      // The location of the center of the map
      const center = { lat: 10.635, lng: -85.437 };
      // The map, centered at center
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center,
        mapTypeId: "terrain",
      });

      // Define the LatLng coordinates for the polygon's path.
      const triangleCoords = [
        { lat: 11.084920, lng: -85.688079 }, // Limite norte
        { lat: 10.8389, lng: -85.4730 }, // Otro punto en el norte
        { lat: 10.4403, lng: -85.6350 }, // Otro punto central
        {lat: 10.854348, lng: -85.955624},
        { lat: 10.356327, lng: -85.875523 },
        { lat: 9.907309, lng: -85.669914 }, 
        { lat: 9.849219, lng: -85.462975},
        { lat: 9.859510, lng: -85.452973},
        { lat: 9.862200, lng: -85.444465},
        // {lat: 9.755660, lng: -85.276895},
        // { lat: 10.1535, lng: -85.6325 }, // Punto sureste
        { lat: 9.7808, lng: -85.3865 },  // Otro punto sureste
        { lat: 9.7490, lng: -85.2628 },  // Limite sur
        { lat: 10.1237, lng: -85.0515 }, // Limite sur-este
        { lat: 10.9606, lng: -84.9842 }, // Limite este
        { lat: 11.2210, lng: -85.5548 } // Cierra el polígono
      ];

      // Construct the polygon
      const chorotegaRegion = new window.google.maps.Polygon({
        paths: triangleCoords,
        strokeColor: "silver",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "green",
        fillOpacity: 0.35,
      });
      chorotegaRegion.setMap(map);
    }

    // Load the script
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&callback=initMap&v=weekly&solution_channel=GMP_CCS_simplepolygon_v2`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
    
    // Assign initMap to the window object
    window.initMap = initMap;

    return () => {
      // Cleanup the script on unmount
      window.document.body.removeChild(googleMapScript);
    };
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: '100vh' }}></div>
  );
};

export default Map;