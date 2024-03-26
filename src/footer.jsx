import React from 'react';
import './footer.css';
import footer from './assets/images/footer.svg'
import facebook from './assets/images/icon-facebook.svg'
import youtube from './assets/images/icon-youtube.svg'
import twitter from './assets/images/icon-twitter.svg'
import pinterest from './assets/images/icon-pinterest.svg'
import instagram from './assets/images/icon-instagram.svg'

export default function Footer() {
    return (
        <footer className="footer">
            <div className='footerDiv'>
                <div>
                    <div className='footerOne'>
                        <img src={footer} alt="" />
                    </div>
                    <div>
                        <img src={facebook} alt="facebook" className='icon'/>
                        <img src={youtube} alt="youtube" />
                        <img src={twitter} alt="twitter" className='icon' />
                        <img src={pinterest} alt="pinterest" />
                        <img src={instagram} alt="instagram" />                    
                    </div>
                </div>
                <div>
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Career</li>
                        <li>Support</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <button>Request Invite</button>
                    <p>© Easybank. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}