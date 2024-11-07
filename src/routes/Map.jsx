import React, { useEffect, useState } from 'react';

/* - - - </> [LINK] </> - - - */
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { useRegionContext } from '../context/RegionProvider';
import { usePlaceContext } from '../context/PlaceProvider';
import { useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';

/* - - - </> [LINK] </> - - - */
import '../App.css';

function Map()
{
    /* - - - </> [DATA] </> - - - */
    const { id } = useParams();

    /* - - - </> [DATA] </> - - - */
    const places = usePlaceContext();
    const regions = useRegionContext();
    
    /* - - - </> [DATA] </> - - - */
    const [currentRegion, setCurrentRegion] = useState(null);
    const [currentPlaces, setCurrentPlaces] = useState(null);

    const [toggle, setToggle] = useState(null);
    
    /* - - - </> [DATA] </> - - - */
    useEffect(() => {
        
        if (regions && places)
        {
            /* - - - </> [DATA] </> - - - */
            setCurrentRegion(regions.find(item => item.region_id === parseInt(id)));
            setCurrentPlaces(places.filter(item => item.region_id === parseInt(id)));
        }

    }, [regions, places, id]);
    
    return (currentRegion) ? (

        <>
        
        {/* - - - </> [DIV] </> - - - */}
        <div className='main-wrapper'>
            
            {/* - - - </> [MAP] </> - - - */}
            <LoadScript googleMapsApiKey='AIzaSyDjBY_AhQBJzbKlxA9695hUepkwPQYTYLQ'>
                
                {/* - - - </> [MAP] </> - - - */}
                <GoogleMap mapContainerStyle={{width: '100%', height: '100%'}} center={{lat: Number(currentRegion.region_lat), lng: Number(currentRegion.region_lng)}} zoom={10}>
                    
                    {/* - - - </> [MAP] </> - - - */}
                    {currentPlaces && currentPlaces.map((item) => (

                        //* - - - </> [ITEM] </> - - - *//
                        <Marker key={item.place_id} position={{lat: Number(item.place_lat), lng: Number(item.place_lng)}} title={item.place_name} onClick={() => setToggle(item.place_id)}>

                            {/* - - - </> [ITEM] </> - - - */}
                            {toggle === item.place_id ? (
                                
                                <InfoWindow onCloseClick={() => setToggle(null)}>

                                    {/* - - - </> [DIV] </> - - - */}
                                    <div className='toggle-wrapper'>

                                        {/* - - - </> [TEXT] </> - - - */}
                                        <p className='toggle-title'>{item.place_name}</p>

                                        {/* - - - </> [SPAN] </> - - - */}
                                        <span className='toggle-score'>
                                            
                                            {/* - - - </> [ICON] </> - - - */}
                                            <Icon icon="bi:star-fill" className='toggle-icon'/>
                                            
                                            {/* - - - </> [TEXT] </> - - - */}
                                            <p className='toggle-text'>{item.place_score}</p>

                                        </span>

                                        {/* - - - </> [TEXT] </> - - - */}
                                        <p className='toggle-link'>See more</p>

                                    </div>

                                </InfoWindow>

                            ) : (null)}
                            
                        </Marker>

                    ))}

                </GoogleMap>

            </LoadScript>

        </div>
        
        </>

    ) : ( <div className='main-wrapper'>Loading...</div> );
}

export default Map;