import React, { useContext } from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header' id='header'>
            <div className="header-content">
                <h2>Order your favourite food here!</h2>
                <p>Choose from a diverse menu featuring a delicous array of dishes crafted with the finest ingredients and culinary expertise.
                 Our mission is to satisfy your cravings and elevate your dining experience.</p>
                 <button><a href="#explore-menu">View Menu</a></button>
            </div>
        </div>
    )
}

export default Header
