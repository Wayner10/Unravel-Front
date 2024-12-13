import React, { useState } from 'react';

/* - - - </> [LINK] </> - - - */
import { Icon } from '@iconify/react';

/* - - - </> [LINK] </> - - - */
import '../App.css';
import './Sidebar.css';

function Sidebar()
{
    /* - - - </> [DATA] </> - - - */
    const [status, setStatus] = useState(false);

    /* - - - </> [DATA] </> - - - */
    const handleChange = () => { setStatus(!status); }

    return (

        <>

        {/* - - - </> [SEC] </> - - - */}
        <section className='sidebar-wrapper'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='sidebar-button' onClick={handleChange}>

                {/* - - - </> [ICON] </> - - - */}
                <Icon icon="fe:arrow-right" className='sidebar-icon'/>

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className={`sidebar ${status ? 'sidebar-active' : null}`}>

                {/* - - - </> [DIV] </> - - - */}
                <div className='sidebar-button' onClick={handleChange}>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="fe:arrow-left" className='sidebar-icon'/>

                </div>

                {/* - - - </> [SPAN] </> - - - */}
                <span className='sidebar-span'>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='sidebar-title'>Welcome to Unravel</p>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='sidebar-text'>The best place to travel in Costa Rica ...</p>
                    
                </span>

            </div>

        </section>

        </>
    );
}

export default Sidebar;