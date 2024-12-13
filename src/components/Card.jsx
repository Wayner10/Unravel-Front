import React from 'react';

/* - - - </> [LINK] </> - - - */
import { Icon } from '@iconify/react';

/* - - - </> [LINK] </> - - - */
import '../App.css';
import './Card.css';


function Card({ data })
{
    /* - - - </> [DATA] </> - - - */
    const getStatus = () => {
        
        /* - - - </> [DATA] </> - - - */
        const value = ['user_status', 'place_status'];

        /* - - - </> [DATA] </> - - - */
        const key = value.find(key => data.some(item => key in item));
        return key ? `+ ${data.filter(item => item[key] === true).length}` : 'N/A';
    }
    
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
                    <p className='card-title'>{`+ ${data.length}`}</p>

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
                    <p className='card-title'>{`+ ${data.length}`}</p>

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
                    <p className='card-title'>{getStatus()}</p>
                    
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