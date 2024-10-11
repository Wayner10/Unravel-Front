import React from 'react';
import { Icon } from '@iconify/react';
import logo from '../images/logo_unravel.svg';

import '../App.css';
import '../styles/footer.css';

function Footer()
{
    return (

        <section className='footer-section'>

            {/* - - - </> [DIV] </> - - - */}
            <div className='footer-lf-lg-col'>

                {/* - - - </> [DIV] </> - - - */}
                <div className='footer-logo-wrapper'>

                    {/* - - - </> [IMG] </> - - - */}
                    <img src={logo} alt="logo_unravel" className='footer-logo'/>

                    {/* - - - </> [ICON] </> - - - */}
                    <Icon icon="rivet-icons:image-solid" className='footer-logo-icon'/>

                </div>

                {/* - - - </> [LINE] </> - - - */}
                <hr className='footer-line'/>

                {/* - - - </> [DIV] </> - - - */}
                <div className='footer-text-wrapper'>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='footer-title'>Lorem Ipsum</p>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='footer-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis nisl euismod scelerisque sodales. Nulla at rhoncus ipsum. Suspendisse aliquet, tellus eget tincidunt pellentesque, magna erat euismod leo, vitae vestibulum nisi quam sit amet neque.</p>

                </div>

                {/* - - - </> [DIV] </> - - - */}
                <div className='footer-info-wrapper'>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='footer-info-v1'>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='footer-info-title'>Lorem Ipsum</p>

                        {/* - - - </> [LINE] </> - - - */}
                        <hr className='footer-line'/>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='footer-info-link'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:sharp-phone" className='footer-info-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='footer-info-text'>{'+1 (505) 555-5050'}</p>

                        </span>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='footer-info-link'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:sharp-phone" className='footer-info-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='footer-info-text'>{'+1 (505) 555-5050'}</p>

                        </span>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='footer-info-link'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:sharp-email" className='footer-info-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='footer-info-text'>lorem-ipsum@dolorsitamet.com</p>

                        </span>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='footer-info-link'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="fluent:location-12-filled" className='footer-info-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='footer-info-text'>Lorem ipsum Av. 1, dolor sit amet</p>

                        </span>

                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='footer-info-v2'>

                        {/* - - - </> [TEXT] </> - - - */}
                        <p className='footer-info-title'>Lorem Ipsum</p>

                        {/* - - - </> [LINE] </> - - - */}
                        <hr className='footer-line'/>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='footer-info-link'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:sharp-phone" className='footer-info-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='footer-info-text'>{'+1 (505) 555-5050'}</p>

                        </span>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='footer-info-link'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:sharp-phone" className='footer-info-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='footer-info-text'>{'+1 (505) 555-5050'}</p>

                        </span>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='footer-info-link'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="ic:sharp-email" className='footer-info-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='footer-info-text'>lorem-ipsum@dolorsitamet.com</p>

                        </span>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='footer-info-link'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="fluent:location-12-filled" className='footer-info-icon'/>

                            {/* - - - </> [TEXT] </> - - - */}
                            <p className='footer-info-text'>Lorem ipsum Av. 1, dolor sit amet</p>

                        </span>

                    </div>
                    
                </div>

                {/* - - - </> [DIV] </> - - - */}
                <div className='footer-social-wrapper'>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='footer-social-title'>Lorem Ipsum</p>

                    {/* - - - </> [DIV] </> - - - */}
                    <div className='footer-social'>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='footer-social-item'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="fa6-brands:square-facebook" className='footer-social-icon'/>

                            {/* - - - </> [LINK] </> - - - */}
                            <a href="https://facebook.com/" className='footer-social-link' target='blank'>lorem/ipsum.com</a>

                        </span>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='footer-social-item'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="fa6-brands:instagram" className='footer-social-icon'/>

                            {/* - - - </> [LINK] </> - - - */}
                            <a href="https://instagram.com/" className='footer-social-link' target='blank'>lorem/ipsum.com</a>

                        </span>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='footer-social-item'>

                            {/* - - - </> [ICON] </> - - - */}
                            <Icon icon="fa6-brands:x-twitter" className='footer-social-icon'/>

                            {/* - - - </> [LINK] </> - - - */}
                            <a href="https://twitter.com/" className='footer-social-link' target='blank'>lorem/ipsum.com</a>

                        </span>

                    </div>

                </div>

                {/* - - - </> [LINE] </> - - - */}
                <hr className='footer-line'/>

                {/* - - - </> [TEXT] </> - - - */}
                <p className='footer-copyright'><span>© 2024 Lorem Ipsum.</span> Lorem ipsum dolor sit amet</p>

            </div>

            {/* - - - </> [DIV] </> - - - */}
            <div className='footer-rg-lg-col'>

                {/* - - - </> [DIV] </> - - - */}
                <div className='footer-text-wrapper'>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='footer-contact-title-v1'>Lorem</p>

                    {/* - - - </> [TEXT] </> - - - */}
                    <p className='footer-contact-title-v2'>IPSUM</p>

                </div>

                {/* - - - </> [FORM] </> - - - */}
                <form action="" className='footer-form'>
                    
                    {/* - - - </> [DIV] </> - - - */}
                    <div id='contact-name' className="form-input-wrapper">

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="fe:user" className='form-input-icon'/>
                        
                        {/* - - - </> [INPUT] </> - - - */}
                        <input type="text" placeholder='Name here . . .' className='form-input'/>

                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div id='contact-lastname' className="form-input-wrapper">

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="fe:user" className='form-input-icon'/>
                        
                        {/* - - - </> [INPUT] </> - - - */}
                        <input type="text" placeholder='Lastname here . . .' className='form-input'/>

                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div id='contact-title' className="form-input-wrapper">

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ri:pencil-fill" className='form-input-icon'/>
                        
                        {/* - - - </> [INPUT] </> - - - */}
                        <input type="text" placeholder='Title here . . .' className='form-input'/>

                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <div id='contact-message' className="form-input-wrapper">

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ri:pencil-fill" className='form-textarea-icon'/>

                        {/* - - - </> [INPUT] </> - - - */}
                        <textarea placeholder='Message here . . .' className='form-input'></textarea>

                    </div>

                    {/* - - - </> [DIV] </> - - - */}
                    <button id='contact-button-v1' className='form-button-v1'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="fa:whatsapp" className='form-button-icon-v1'/>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='form-button-text-v1'>Lorem Ipsum</span>

                    </button>

                    {/* - - - </> [DIV] </> - - - */}
                    <button id='contact-button-v2' className='form-button-v2'>

                        {/* - - - </> [ICON] </> - - - */}
                        <Icon icon="ic:sharp-send" className='form-button-icon-v2'/>

                        {/* - - - </> [SPAN] </> - - - */}
                        <span className='form-button-text-v2'>Lorem Ipsum</span>

                    </button>

                </form>

                {/* - - - </> [TEXT] </> - - - */}
                <p className='footer-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis nisl euismod scelerisque sodales. Nulla at rhoncus ipsum. Suspendisse aliquet, tellus eget tincidunt pellentesque, magna erat euismod leo, vitae vestibulum nisi quam sit amet neque.</p>
                
            </div>

        </section>

    );
}

export default Footer;