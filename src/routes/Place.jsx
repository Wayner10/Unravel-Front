import React, { useEffect, useState } from 'react';

/* - - - </> [LINK] </> - - - */
import { usePlaceContext } from '../context/PlaceProvider';
import { useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';

/* - - - </> [LINK] </> - - - */
import Navigation from '../components/Navigation';
import Location from '../components/Location';
import Sidebar from '../components/Sidebar';
import CalendarModal from './Calendar';
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
    const openTime = new Date(`${String(currentDate).substring(0, 15)} ${place.place_opening_time} GMT-0600`);
    const closeTime = new Date(`${String(currentDate).substring(0, 15)} ${place.place_closing_time} GMT-0600`);
    
     //* - - -</> [CALENDAR] - - - </> *//
     const [isModalOpen, setModalOpen] = useState(false);

     // Función para abrir el modal
     const handleIconClick = () => {
         setModalOpen(true);
     };
 
     // Función para cerrar el modal
     const handleCloseModal = () => {
         setModalOpen(false);
     };

    return (place) ? (

        <>

        {/* - - - </> [NAV] </> - - - */}
        <Navigation></Navigation>

        {/* - - - </> [SEC] </> - - - */}
        <Sidebar></Sidebar>

        {/* - - - </> [SEC] </> - - - */}
        <section className='place-wrapper'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='place-gallery'>
                
                {/* - - - </> [DIV] </> - - - */}
                {Array.from({length: 6},(_, index) =>
                
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

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='place-title-wrapper'>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='place-title'>{place.place_name}</p>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='place-title-span'>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='place-text'>{place.place_feature}</p>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ph:seal-check-fill" className='place-icon'/>

                        </span>

                    </div>
                    
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
                    <hr className='place-line-horizontal'/>
                    
                    {/* - - - </> [SPAN] </> - - - */}
                    <span className='place-span'>
                        
                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="mdi:about" className='place-icon'/>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='place-subtitle'>Description</p>
                        
                    </span>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='place-text'>{place.place_desc_short} ...</p>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='place-price'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ph:seal-check-fill" className='place-price-icon'/>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='place-price-span'>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='place-price-text'>Entrance fee</p>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='place-price-desc'>Taxes not applied*</p>

                        </span>

                        {/* - - - </> [LINE] </> - - - */}
                        <hr className='place-line-vertical'/>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='place-price-span'>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='place-price-text'>{place.place_price_adult === 0 ? "FREE" : `$${place.place_price_adult}`}</p>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='place-price-desc'>Adult</p>

                        </span>

                        {/* - - - </> [LINE] </> - - - */}
                        <hr className='place-line-vertical'/>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='place-price-span'>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='place-price-text'>{place.place_price_child === 0 ? "FREE" : `$${place.place_price_child}`}</p>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='place-price-desc'>Child</p>

                        </span>
                        
                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='place-button-wrapper'>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='place-submit-button'>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='place-button-text'>Add to cart</p>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="material-symbols:check-circle" className='place-button-icon'/>

                        </div>

                                                {/* - - - </> [DIV] </> - - - */}
                        <div className='place-google-button'onClick={handleIconClick}>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="logos:google-icon"  onClick={handleIconClick} className='place-button-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p  className='place-button-text'>Add to calendar</p>

                            {/* <CalendarModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
                            
                        </div>

                    </div>

                    {/* - - - </> [SPAN] </> - - - */}
                    <span className='place-span'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="material-symbols:warning" className='place-alert-icon'/>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='place-alert-text'>Please check all place features before making any purchase*</p>
                        
                    </span>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='place-link-wrapper'>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='place-link-button'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="simple-icons:waze" className='place-link-icon'/>

                            {/* - - - </> [SPAN] </> - - - */}
                            <span className='place-link-span'>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='place-link-text'>Waze</p>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='place-link-desc'>{place.place_waze_url === "N/A" ? "Not Available" : place.place_waze_url}</p>

                            </span>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ri:external-link-line" className='place-link-icon'/>

                        </div>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='place-link-button'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="streamline:web" className='place-link-icon'/>

                            {/* - - - </> [SPAN] </> - - - */}
                            <span className='place-link-span'>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='place-link-text'>Website</p>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='place-link-desc'>{place.place_page_url === "N/A" ? "Not Available" : place.place_page_url}</p>

                            </span>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ri:external-link-line" className='place-link-icon'/>

                        </div>

                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='place-user'>

                        {/* - - - </> [DIV] </> - - - */}
                        <div className='place-user-wrapper'>

                            {/* - - - </> [IMG] </> - - - */}
                            <img src="https://rb.gy/yn3h9j" alt="place-user-photo" className='place-user-photo'/>

                            {/* - - - </> [SPAN] </> - - - */}
                            <span className='place-user-span'>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='place-user-text'>Jonathan Sanders</p>

                                {/* - - - </> [TEXT] </> - - - */}
                                <p className='place-user-desc'>@unravel-member</p>

                            </span>

                        </div>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ph:seal-check-fill" className='place-user-icon'/>

                    </div>

                    {/* - - - </> [LINE] </> - - - */}
                    <hr className='place-line-horizontal'/>

                    {/* - - - </> [SPAN] </> - - - */}
                    <span className='place-span'>
                        
                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="mdi:about" className='place-icon'/>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='place-subtitle'>Description</p>
                        
                    </span>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='place-text'>{place.place_desc_large} ...</p>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='place-read-button'>{`Read more >>`}</p>

                    {/* - - - </> [LINE] </> - - - */}
                    <hr className='place-line-horizontal'/>

                    {/* - - - </> [SPAN] </> - - - */}
                    <span className='place-span'>
                        
                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="mdi:about" className='place-icon'/>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='place-subtitle'>Location</p>
                        
                    </span>

                    {/* - - - </> [MAP] </> - - - */}
                    <Location data={place}></Location>

                    {/* - - - </> [SPAN] </> - - - */}
                    <span className='place-span'>
                        
                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="mdi:about" className='place-icon'/>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='place-subtitle'>Where's my destiny?</p>
                        
                    </span>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='place-text'>{place.place_desc_large} ...</p>

                    {/* - - - </> [LINE] </> - - - */}
                    <hr className='place-line-horizontal'/>

                    {/* - - - </> [SPAN] </> - - - */}
                    <span className='place-span'>
                        
                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="mdi:about" className='place-icon'/>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='place-subtitle'>Reviews</p>
                        
                    </span>
                    
                    {/* - - - </> [DIV] </> - - - */}
                    <div className='place-review'>
                        
                        {/* - - - </> [DIV] </> - - - */}
                        <div className='place-review-wrapper'>

                            {/* - - - </> [DIV] </> - - - */}
                            <div className='place-user-wrapper'>

                                {/* - - - </> [IMG] </> - - - */}
                                <img src="https://rb.gy/j8jpoq" alt="place-user-photo" className='place-user-photo'/>

                                {/* - - - </> [SPAN] </> - - - */}
                                <span className='place-user-span'>

                                    {/* - - - </> [TEXT] </> - - - */}
                                    <p className='place-user-text'>Joseph Smithson</p>

                                    {/* - - - </> [TEXT] </> - - - */}
                                    <p className='place-user-desc'>@unravel-member</p>

                                </span>

                            </div>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='place-review-desc'>Nice place. I went with my family last summer and we had a wonderful time. I highly recommend it ...</p>

                            {/* - - - </> [DIV] </> - - - */}
                            <div className='place-review-score'>

                                {/* - - - </> [DIV] </> - - - */}
                                <div className='place-score-wrapper'>

                                    {/* - - - </> [ICON] </> - - - */}
                                    {Array(5).fill(null).map((_, index) => {

                                        //* - - - </> [ICON] </> - - - *//
                                        if (index < Math.floor(3))
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
                                <p className='place-review-date'>October 10th, 2024</p>

                            </div>

                        </div>
                        
                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='place-review'>
                        
                        {/* - - - </> [DIV] </> - - - */}
                        <div className='place-review-wrapper'>

                            {/* - - - </> [DIV] </> - - - */}
                            <div className='place-user-wrapper'>

                                {/* - - - </> [IMG] </> - - - */}
                                <img src="https://rb.gy/kry15g" alt="place-user-photo" className='place-user-photo'/>

                                {/* - - - </> [SPAN] </> - - - */}
                                <span className='place-user-span'>

                                    {/* - - - </> [TEXT] </> - - - */}
                                    <p className='place-user-text'>Janneth Jhonson</p>

                                    {/* - - - </> [TEXT] </> - - - */}
                                    <p className='place-user-desc'>@unravel-member</p>

                                </span>

                            </div>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='place-review-desc'>The place is beautiful, but the trip is quite tiring. Remember to bring a bottle of water, otherwise you will have a bad time ...</p>

                            {/* - - - </> [DIV] </> - - - */}
                            <div className='place-review-score'>

                                {/* - - - </> [DIV] </> - - - */}
                                <div className='place-score-wrapper'>

                                    {/* - - - </> [ICON] </> - - - */}
                                    {Array(5).fill(null).map((_, index) => {

                                        //* - - - </> [ICON] </> - - - *//
                                        if (index < Math.floor(2))
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
                                <p className='place-review-date'>October 15th, 2024</p>

                            </div>

                        </div>
                        
                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='place-review'>
                        
                        {/* - - - </> [DIV] </> - - - */}
                        <div className='place-review-wrapper'>

                            {/* - - - </> [DIV] </> - - - */}
                            <div className='place-user-wrapper'>

                                {/* - - - </> [IMG] </> - - - */}
                                <img src="https://rb.gy/qzjpqt" alt="place-user-photo" className='place-user-photo'/>

                                {/* - - - </> [SPAN] </> - - - */}
                                <span className='place-user-span'>

                                    {/* - - - </> [TEXT] </> - - - */}
                                    <p className='place-user-text'>Jhonatan Thomas</p>

                                    {/* - - - </> [TEXT] </> - - - */}
                                    <p className='place-user-desc'>@unravel-member</p>

                                </span>

                            </div>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='place-review-desc'>The best experience of my life. I went with my friends a year ago and we had a great time. Highly recommended ...</p>

                            {/* - - - </> [DIV] </> - - - */}
                            <div className='place-review-score'>

                                {/* - - - </> [DIV] </> - - - */}
                                <div className='place-score-wrapper'>

                                    {/* - - - </> [ICON] </> - - - */}
                                    {Array(5).fill(null).map((_, index) => {

                                        //* - - - </> [ICON] </> - - - *//
                                        if (index < Math.floor(5))
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
                                <p className='place-review-date'>October 20th, 2024</p>

                            </div>

                        </div>
                        
                    </div>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='place-read-button'>{`Read more >>`}</p>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='place-submit-button'>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='place-button-text'>Add review</p>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="material-symbols:check-circle" className='place-button-icon'/>

                    </div>
                    
                </div>
                
            </div>
            
        </section>

        <CalendarModal isOpen={isModalOpen} onClose={handleCloseModal} />
        
        </>
        
    ) : (<section className='place-wrapper'>There's any place here!</section>);
}

export default Place;