import React from 'react';

/* - - - </> [LINK] </> - - - */
import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

/* - - - </> [LINK] </> - - - */
import logo from '../images/logo_unravel_admin.svg';
import '../App.css';
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

                {/* - - - </> [LI] </> - - - */}
                <ul className='menu-item-wrapper'>
                
                    {/* - - - </> [LI] </> - - - */}
                    <li className={`menu-item ${location.pathname === "/admin" ? "menu-item-active" : null }`} onClick={() => handleRoute("/admin")}>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='menu-item-status'></span>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='menu-item-icon-wrapper'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="octicon:home-fill-16" className='menu-item-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='menu-item-text'>Home</p>
                            
                        </span>
                        
                    </li>
                    
                    {/* - - - </> [LI] </> - - - */}
                    <li className={`menu-item ${location.pathname === "/admin/users" ? "menu-item-active" : null }`} onClick={() => handleRoute("/admin/users")}>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='menu-item-status'></span>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='menu-item-icon-wrapper'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="si:user-alt-fill" className='menu-item-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='menu-item-text'>Users</p>
                            
                        </span>
                        
                    </li>

                    {/* - - - </> [LI] </> - - - */}
                    <li className={`menu-item ${location.pathname === "/admin/places" ? "menu-item-active" : null }`} onClick={() => handleRoute("/admin/places")}>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='menu-item-status'></span>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='menu-item-icon-wrapper'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="fluent:location-12-filled" className='menu-item-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='menu-item-text'>Places</p>
                            
                        </span>
                        
                    </li>
                    
                    {/* - - - </> [LI] </> - - - */}
                    <li className={`menu-item ${location.pathname === "/admin/regions" ? "menu-item-active" : null }`}>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='menu-item-status'></span>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='menu-item-icon-wrapper'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="mingcute:world-2-fill" className='menu-item-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='menu-item-text'>Regions</p>
                            
                        </span>
                        
                    </li>

                    {/* - - - </> [LI] </> - - - */}
                    <li className={`menu-item ${location.pathname === "/admin/reviews" ? "menu-item-active" : null }`}>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='menu-item-status'></span>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='menu-item-icon-wrapper'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="mingcute:message-4-fill" className='menu-item-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='menu-item-text'>Reviews</p>
                            
                        </span>
                        
                    </li>

                </ul>
                
                {/* - - - </> [LI] </> - - - */}
                <li className='menu-item'>

                    {/* - - - </> [SPAN] </> - - - */}
                    <span className='menu-item-icon-wrapper'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ri:logout-box-r-fill" className='menu-item-icon'/>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='menu-item-text'>Log Out</p>
                        
                    </span>
                    
                </li>

            </ul>

        </nav>

        </>

    );
}

export default Menu;