import React, { useEffect, useState } from 'react';

/* - - - </> [LINK] </> - - - */
import { APIProvider, Map, MapControl, ControlPosition, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import { useRegionContext } from '../context/RegionProvider';
import { usePlaceContext } from '../context/PlaceProvider';

import { useNavigate, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';

/* - - - </> [LINK] </> - - - */
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import '../App.css';
import './Region.css';

function Region()
{
    /* - - - </> [DATA] </> - - - */
    const { id } = useParams();

    /* - - - </> [DATA] </> - - - */
    const { places } = usePlaceContext();
    const { getRegion } = useRegionContext();

    //* - - - </> [LINK] </> - - - *//
    const navigate = useNavigate();
    
    /* - - - </> [DATA] </> - - - */
    const [toggle, setToggle] = useState(null);
    const [region, setRegion] = useState(null);
    const [currentPlaces, setCurrentPlaces] = useState(null);

    //* - - - </> [DATA] </> - - - *//
    const fetchRegion = async (id) => {
        try
        {
            //* - - - </> [DATA] </> - - - *//
            const data = await getRegion(id);
            setRegion(data);
        }
        catch (error)
        {
            //* - - - </> [ERROR] </> - - - *//
            console.log(error);
            throw error;
        }
    }
    
    /* - - - </> [DATA] </> - - - */
    useEffect(() => {

        fetchRegion(id);

        if (places)
        {
            /* - - - </> [DATA] </> - - - */
            setCurrentPlaces(places.filter(item => item.region_id === parseInt(id)));
        }

    }, [places, id]);

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

    //* - - - </> [LINK] </> - - - *//
    const seeMore = (region_id, place_id) => {

        navigate(`/${region_id}/${place_id}`);
    }
    
    return (region) ? (

        <>
        
        {/* - - - </> [NAV] </> - - - */}
        <Navigation></Navigation>

        {/* - - - </> [SEC] </> - - - */}
        <Sidebar></Sidebar>

        {/* - - - </> [SEC] </> - - - */}
        <section className='main-wrapper'>
            
            {/* - - - </> [MAP] </> - - - */}
            <APIProvider apiKey={'AIzaSyCzhE57e20Pm3CttSQIKZwE9Lp0vVXxoOQ'}>

                {/* - - - </> [MAP] </> - - - */}
                <Map mapId={'9f8beaf3893f937e'} defaultCenter={{lat: Number(region.region_lat), lng: Number(region.region_lng)}} defaultZoom={10}>

                    {/* - - - </> [MAP] </> - - - */}
                    <MapControl position={ControlPosition.CENTER}>

                        {/* - - - </> [ITEM] </> - - - */}
                        {currentPlaces && currentPlaces.map((item) => {

                            /* - - - </> [ITEM] </> - - - */
                            if(setCoordinates(Number(item.place_lat), Number(item.place_lng)) && item.region_id === region.region_id && item.place_status === true)
                            {
                                return (

                                    /* - - - </> [ITEM] </> - - - */
                                    <AdvancedMarker key={item.place_id} position={{lat: Number(item.place_lat), lng: Number(item.place_lng)}} title={item.place_name} onClick={() => setToggle(item)}>

                                        {/* - - - </> [ITEM] </> - - - */}
                                        <img src={images[`${item.place_icon}.svg`]} width={30} height={30} alt={item.place_name}/>

                                    </AdvancedMarker>
                                )
                            }
                        
                        })}

                        {toggle && (

                            <InfoWindow position={{lat: Number(toggle.place_lat), lng: Number(toggle.place_lng)}} headerContent={<p className='toggle-title'>{toggle.place_name}</p>} onCloseClick={() => setToggle(null)}>

                                {/* - - - </> [DIV] </> - - - */}
                                <div className='toggle'>

                                    {/* - - - </> [SPAN] </> - - - */}
                                    <span className='toggle-span'>
                                        
                                        {/* - - - </> [TEXT] </> - - - */}
                                        <p className='toggle-text'>{toggle.place_feature}</p>

                                        {/* - - - </> [ICON] </> - - - */}
                                        <Icon icon="ph:seal-check-fill" className='toggle-icon'/>

                                    </span>

                                    {/* - - - </> [TEXT] </> - - - */}
                                    <p className='toggle-text'>{toggle.place_desc_short} ...</p>

                                    {/* - - - </> [DIV] </> - - - */}
                                    <div className='toggle-wrapper'>

                                        {/* - - - </> [TEXT] </> - - - */}
                                        <p className='toggle-link' onClick={() => seeMore(region.region_id, toggle.place_id)}>See more</p>
                                        
                                        {/* - - - </> [SPAN] </> - - - */}
                                        <span className='toggle-span'>
                                            
                                            {/* - - - </> [ICON] </> - - - */}
                                            <Icon icon="bi:star-fill" className='toggle-icon'/>
                                            
                                            {/* - - - </> [TEXT] </> - - - */}
                                            <p className='toggle-text'>{toggle.place_score}</p>

                                        </span>
                                        
                                    </div>


                                </div>

                            </InfoWindow>
                        
                        )}

                    </MapControl>

                </Map>

            </APIProvider>

        </section>
        
        </>

    ) : ( <section className='main-wrapper'>Loading...</section> );
}

export default Region;