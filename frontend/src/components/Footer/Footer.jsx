import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

function Footer() {
    return (
        <div className='footer' id='footer'>
         <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Choose from a diverse menu featuring a delicous array of dishes crafted with the finest ingredients and culinary expertise.
                Our mission is to satisfy your cravings and elevate your dining experience.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>Phone</li>
                    <li>Email</li>
                </ul>
            </div>
         </div>
         <hr />
        </div>
    )
}

export default Footer
