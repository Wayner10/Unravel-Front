import React from 'react';

/* - - - </> [LINK] </> - - - */
import { usePlaceContext } from '../../../context/PlaceProvider';
import { Icon } from '@iconify/react';

/* - - - </> [LINK] </> - - - */
import '../../../App.css';
import './Card.css';


function Card()
{
    /* - - - </> [DATA] </> - - - */
    const { places } = usePlaceContext();
    
    return (

        <>

        {/* - - - </> [SEC] </> - - - */}
        <section className='card-section'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='card'>

                {/* - - - </> [DIV] </> - - - */}
                <div className='card-wrapper'>

                    {/* - - - </> [SPAN] </> - - - */}
                    <span className='card-span'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="icon-park-solid:adjacent-item" className='card-icon'/>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='card-text'>Items</p>

                    </span>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='card-title'>{`+ ${places.length}`}</p>

                    {/* - - - </> [SPAN] </> - - - */}
                    <span className='card-span'>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='card-desc'>Available right <br/> now in the database</p>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ri:box-3-fill" className='card-icon'/>

                    </span>

                </div>

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='card'>

                {/* - - - </> [DIV] </> - - - */}
                <div className='card-wrapper'>

                    {/* - - - </> [SPAN] </> - - - */}
                    <span className='card-span'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="icon-park-solid:adjacent-item" className='card-icon'/>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='card-text'>Items</p>

                    </span>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='card-title'>{`+ ${places.length}`}</p>

                    {/* - - - </> [SPAN] </> - - - */}
                    <span className='card-span'>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='card-desc'>Available right <br/> now in the database</p>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ri:box-3-fill" className='card-icon'/>

                    </span>

                </div>

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='card'>

                {/* - - - </> [DIV] </> - - - */}
                <div className='card-wrapper'>

                    {/* - - - </> [SPAN] </> - - - */}
                    <span className='card-span'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="icon-park-solid:adjacent-item" className='card-icon'/>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='card-text'>Items</p>

                    </span>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='card-title'>{`+ ${places.filter(item => item.place_status === true).length}`}</p>

                    {/* - - - </> [SPAN] </> - - - */}
                    <span className='card-span'>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='card-desc'>Available right <br/> now in the database</p>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ri:box-3-fill" className='card-icon'/>

                    </span>

                </div>

            </div>

        </section>

        </>

    );
}

export default Card;