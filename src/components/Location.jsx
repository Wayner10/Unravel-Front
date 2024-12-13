import React, { useEffect, useState } from 'react';
import { APIProvider, Map, MapControl, ControlPosition, AdvancedMarker } from '@vis.gl/react-google-maps';

/* - - - </> [LINK] </> - - - */
import '../App.css';
import './Location.css';

function Location({ data })
{
    /* - - - </> [DATA] </> - - - */
    const [status, setStatus] = useState(false);

    /* - - - </> [DATA] </> - - - */
    useEffect(() => {
        
        /* - - - </> [DATA] </> - - - */
        if(data) { setTimeout(() => setStatus(true), 100); }

    }, [data]);

    /* - - - </> [DATA] </> - - - */
    function getImages(src)
    {
        let images = {};
        try
        {
            /* - - - </> [DATA] </> - - - */
            src.keys().map((item) => { images[item.replace("./", "")] = src(item); });
        }
        catch (error)
        {
            /* - - - </> [DATA] </> - - - */
            console.error("Error importing icons:", error);
        }
        return images;
    }

    /* - - - </> [DATA] </> - - - */
    const images = getImages(require.context("../images/icons", false, /.svg$/));

    /* - - - </> [DATA] </> - - - */
    const setCoordinates = (lat, lng) => {

        /* - - - </> [DATA] </> - - - */
        const setLat = Number.isFinite(lat) && lat >= -90 && lat <= 90;
        const setLng = Number.isFinite(lng) && lng >= -180 && lng <= 180;

        return setLat && setLng;
    }

    return (status) ? (

        <>

        <section className='location-wrapper'>

            {/* - - - </> [MAP] </> - - - */}
            <APIProvider apiKey={'AIzaSyCzhE57e20Pm3CttSQIKZwE9Lp0vVXxoOQ'}>

                {/* - - - </> [MAP] </> - - - */}
                <Map mapId={'9f8beaf3893f937e'} defaultCenter={{lat: Number(data.place_lat), lng: Number(data.place_lng)}} defaultZoom={10}>

                    {/* - - - </> [MAP] </> - - - */}
                    <MapControl position={ControlPosition.CENTER}>

                        {/* - - - </> [ITEM] </> - - - */}
                        {setCoordinates(Number(data.place_lat), Number(data.place_lng)) ? (

                            /* - - - </> [ITEM] </> - - - */
                            <AdvancedMarker position={{lat: Number(data.place_lat), lng: Number(data.place_lng)}}>

                                {/* - - - </> [ITEM] </> - - - */}
                                <img src={images[`${data.place_icon}.svg`]} width={50} height={50} alt={data.place_name}/>

                            </AdvancedMarker>

                        ) : (null)}

                    </MapControl>

                </Map>
                
            </APIProvider>

        </section>

        </>

    ) : ( <section className='location-wrapper'>Loading...</section> );
}

export default Location;