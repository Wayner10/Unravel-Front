import React, { useEffect, useState, useCallback } from 'react';

/* - - - </> [LINK] </> - - - */
import { APIProvider, Map, MapControl, ControlPosition, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import { useRegionContext } from '../context/RegionProvider';
import { usePlaceContext } from '../context/PlaceProvider';
import { useTypeContext } from '../context/TypeProvider';
import { useNavigate, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';

/* - - - </> [LINK] </> - - - */
import '../App.css';
import './Region.css';

function Region() {
    /* - - - </> [DATA] </> - - - */
    const { id } = useParams();

    /* - - - </> [DATA] </> - - - */
    const types = useTypeContext();
    const { places } = usePlaceContext();
    const { getRegion } = useRegionContext();

    //* - - - </> [LINK] </> - - - *//
    const navigate = useNavigate();
    
    /* - - - </> [DATA] </> - - - */
    const [toggle, setToggle] = useState(null);
    const [region, setRegion] = useState(null);
    const [currentPlaces, setCurrentPlaces] = useState([]);

    /* - - - </> [DATA] </> - - - */
    const fetchRegion = useCallback(async (id) => {
        try {
            const data = await getRegion(id);
            setRegion(data);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }, [getRegion]); // Ensure getRegion is stable

    /* - - - </> [DATA] </> - - - */
    useEffect(() => {
        fetchRegion(id);
        
        if (places) {
            // setCurrentPlaces(places.filter(item => item.region_id === parseInt(id)));

            const filtered = places.filter(item => item.region_id === parseInt(id));
            setCurrentPlaces(filtered.filter(item => item.place_status === true))
        }

    }, [fetchRegion, places, id]); // Added fetchRegion to dependencies

    /* - - - </> [DATA] </> - - - */
    function getImages(src) {
        let images = {};
        try {
            src.keys().forEach((item) => {
                images[item.replace("./", "")] = src(item);
            });
        } catch (error) {
            console.error("Error importing icons:", error);
        }
        return images;
    }

    /* - - - </> [DATA] </> - - - */
    const images = getImages(require.context("../images/icons", false, /.svg$/));

    /* - - - </> [DATA] </> - - - */
    const setCoordinates = (lat, lng) => {
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
            <section className='main-wrapper'>
                {/* - - - </> [MAP] </> - - - */}
                <APIProvider apiKey={'AIzaSyAcqW9XalNFFhs7Tv_7yu8lxKg6FMmt-70'}>
                    <Map mapId={'9f8beaf3893f937e'} defaultCenter={{lat: Number(region.region_lat), lng: Number(region.region_lng)}} defaultZoom={10}>
                        <MapControl position={ControlPosition.CENTER}>
                            {/* - - - </> [ITEM] </> - - - */}
                            {currentPlaces && currentPlaces.map((item) => {
                                if (setCoordinates(Number(item.place_lat), Number(item.place_lng)) && item.region_id === region.region_id) {
                                    return (
                                        <AdvancedMarker 
                                            key={item.place_id} 
                                            position={{lat: Number(item.place_lat), lng: Number(item.place_lng)}} 
                                            title={item.place_name} 
                                            onClick={() => setToggle(item)}
                                        >
                                            <img 
                                                src={images[`${types.find(type => type.place_type_id === item.place_type_id)?.place_type_desc.toLowerCase()}.svg`]} 
                                                width={30} 
                                                height={30} 
                                                alt={item.place_name}
                                            />
                                        </AdvancedMarker>
                                    );
                                }
                                return null; // Return null if the condition is not met
                            })}
                            {toggle && (
                                <InfoWindow 
                                    position={{lat: Number(toggle.place_lat), lng: Number(toggle.place_lng)}} 
                                    headerContent={<p className='toggle-title'>{toggle.place_name}</p>} 
                                    onCloseClick={() => setToggle(null)}
                                >
                                    <div className='toggle'>
                                        <span className='toggle-span'>
                                            <Icon icon="fluent:location-12-filled" className='toggle-icon'/>
                                            <p className='toggle-text'>{toggle.place_canton}, {toggle.place_nearest_city}</p>
                                        </span>
                                        <div className='toggle-wrapper'>
                                            <p className='toggle-link' onClick={() => seeMore(region.region_id, toggle.place_id)}>See more</p>
                                            <span className='toggle-span'>
                                                <Icon icon="bi:star-fill" className='toggle-icon'/>
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
    ) : (
        <section className='main-wrapper'>Loading...</section>
    );
}

export default Region;