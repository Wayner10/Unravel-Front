import React from 'react';

/* - - - </> [LINK] </> - - - */
import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

/* - - - </> [LINK] </> - - - */
import logo from '../images/logo_unravel.svg';
import './Navigation.css';

function Navigation()
{
    //* - - - </> [LINK] </> - - - *//
    const navigate = useNavigate();

    //* - - - </> [LINK] </> - - - *//
    const location = useLocation();

    //* - - - </> [LINK] </> - - - *//
    const handleRoute = (link) => {

        navigate(link);
    }

    return (

        <>

        {/* - - - </> [NAV] </> - - - */}
        <nav className='navigation'>

            {/* - - - </> [UL] </> - - - */}
            <ul className='navigation-wrapper'>

                {/* - - - </> [LI] </> - - - */}
                <li className='navigation-item' onClick={() => handleRoute("/")}>

                    {/* - - - </> [IMG] </> - - - */}
                    <img src={logo} alt='logo_unravel' className='navigation-item-logo'/>

                </li>

                {/* - - - </> [LI] </> - - - */}
                <li className='navigation-item' onClick={() => handleRoute("/admin/places")}>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="rivet-icons:menu" className='navigation-item-icon'/>

                </li>

            </ul>

        </nav>

        </>

    );
}

export default Navigation;