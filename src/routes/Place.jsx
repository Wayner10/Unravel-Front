import React, { useEffect, useState } from 'react';

/* - - - </> [LINK] </> - - - */
import { usePlaceContext } from '../context/PlaceProvider';
import { useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';

/* - - - </> [LINK] </> - - - */
import '../App.css';
import './Place.css';

function Place()
{
    /* - - - </> [DATA] </> - - - */
    const { place_id } = useParams();
    
    /* - - - </> [DATA] </> - - - */
    const { getPlace } = usePlaceContext();
    
    /* - - - </> [DATA] </> - - - */
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
    
    /* - - - </> [DATA] </> - - - */
    useEffect(() => {
        
        fetchPlace(place_id);

    }, []);

    //* - - - </> [DATE] </> - - - *//
    const currentDate = new Date();
    const openTime = new Date(`${String(currentDate).substring(0, 15)} ${place.place_open_time} GMT-0600`);
    const closeTime = new Date(`${String(currentDate).substring(0, 15)} ${place.place_close_time} GMT-0600`);
    
    return (place) ? (

        <section className='place-wrapper'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='place-gallery'>
                
                {/* - - - </> [DIV] </> - - - */}
                {Array.from({length: 5},(_, index) =>
                
                    <div key={index} className='place-image-wrapper'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="rivet-icons:image-solid" className='place-image-icon'/>

                    </div>

                )}

            </div>
            
            {/* - - - </> [DIV] </> - - - */}
            <div className='place-about'>

                {/* - - - </> [DIV] </> - - - */}
                <div className='place-about-wrapper'>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='place-about-title'>{place.place_name}</p>

                    {/* - - - </> [SPAN] </> - - - */}
                    <span className='place-about-span'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="fluent:location-12-filled" className='place-about-icon'/>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='place-about-text'>{place.place_canton}, {place.place_nearest_city}</p>

                    </span>
                    
                    {/* - - - </> [DIV] </> - - - */}
                    <div className='place-score'>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='place-score-wrapper'>

                            {/* - - - </> [ICON] </> - - - */}
                            {Array(5).fill(null).map((_, index) => {

                                //* - - - </> [ICON] </> - - - *//
                                if (index < Math.floor(place.place_score))
                                {
                                    //* - - - </> [ICON] </> - - - *//
                                    return (<Icon key={`star-${index}`} icon="ic:baseline-star" className='place-score-icon-v1'/>);
                                }
                                else
                                {
                                    //* - - - </> [ICON] </> - - - *//
                                    return (<Icon key={`star-${index}`} icon="ic:baseline-star" className='place-score-icon-v2'/>);
                                }
                            })}

                        </div>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='place-about-status'>{currentDate >= openTime && currentDate <= closeTime ? "OPEN" : "CLOSE"}</p>

                    </div>

                    {/* - - - </> [LINE] </> - - - */}
                    <hr className='place-about-line'/>
                    
                </div>

                {/* - - - </> [DIV] </> - - - */}
                <div className='place-about-wrapper'>
                    
                </div>
            
            </div>
            
        </section>
        
    ) : (<section className='place-wrapper'>There's any place here!</section>);
}

export default Place;