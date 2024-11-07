import React from 'react';

/* - - - </> [LINK] </> - - - */
import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

/* - - - </> [LINK] </> - - - */
import logo from '../../../images/logo_unravel.svg';
import '../../../App.css';
import './Menu.css';

function Menu()
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
        <nav className='menu'>

            {/* - - - </> [UL] </> - - - */}
            <ul className='menu-wrapper'>

                {/* - - - </> [LI] </> - - - */}
                <li className='menu-item' onClick={() => handleRoute("/admin")}>

                    {/* - - - </> [IMG] </> - - - */}
                    <img src={logo} alt='unravel_logo'/>

                </li>

                {/* - - - </> [HR] </> - - - */}
                <hr className='menu-line'/>

                {/* - - - </> [LI] </> - - - */}
                <li className={`menu-item ${location.pathname === "/admin" ? "menu-item-active" : null }`}>

                    {/* - - - </> [SPAN] </> - - - */}
                    <span className='menu-item-status'></span>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="octicon:home-fill-16" className='menu-item-icon'/>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='menu-item-text'>Home</p>

                </li>
                
                {/* - - - </> [LI] </> - - - */}
                <li className={`menu-item ${location.pathname === "/admin/users" ? "menu-item-active" : null }`}>

                    {/* - - - </> [SPAN] </> - - - */}
                    <span className='menu-item-status'></span>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="si:user-alt-fill" className='menu-item-icon'/>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='menu-item-text'>Users</p>

                </li>

                {/* - - - </> [LI] </> - - - */}
                <li className={`menu-item ${location.pathname === "/admin/places" ? "menu-item-active" : null }`}>

                    {/* - - - </> [SPAN] </> - - - */}
                    <span className='menu-item-status'></span>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="fluent:location-12-filled" className='menu-item-icon'/>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='menu-item-text'>Places</p>

                </li>
                
                {/* - - - </> [LI] </> - - - */}
                <li className={`menu-item ${location.pathname === "/admin/regions" ? "menu-item-active" : null }`}>

                    {/* - - - </> [SPAN] </> - - - */}
                    <span className='menu-item-status'></span>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="mingcute:world-2-fill" className='menu-item-icon'/>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='menu-item-text'>Regions</p>

                </li>

                {/* - - - </> [LI] </> - - - */}
                <li className={`menu-item ${location.pathname === "/admin/reviews" ? "menu-item-active" : null }`}>

                    {/* - - - </> [SPAN] </> - - - */}
                    <span className='menu-item-status'></span>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="mingcute:message-4-fill" className='menu-item-icon'/>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='menu-item-text'>Reviews</p>

                </li>

                {/* - - - </> [HR] </> - - - */}
                <hr className='menu-line'/>

                {/* - - - </> [LI] </> - - - */}
                <li className='menu-item-user'>

                    {/* - - - </> [SPAN] </> - - - */}
                    <span className='item-user-wrapper'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ic:sharp-photo" className='item-user-icon'/>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='item-user-text'>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='item-user-name'>Username</p>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='item-user-desc'>@Admin</p>

                        </span>
                        
                    </span>
                
                </li>

                {/* - - - </> [LI] </> - - - */}
                <li className='menu-item'>
                    
                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="ri:logout-box-r-fill" className='menu-item-icon'/>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='menu-item-text'>Log Out</p>

                </li>

            </ul>

        </nav>

        </>

    );
}

export default Menu;