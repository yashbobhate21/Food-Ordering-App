import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import{Link, useNavigate} from 'react-router-dom'
import { Storecontext } from '../../Context/Storecontext'

function Navbar({setshowlogin}) {
const [menu, setmenu] = useState("Home")
const {token,setToken} = useContext(Storecontext);

const navigate = useNavigate()
const logout = ()=>{
   localStorage.removeItem("token")
   setToken("")
   navigate("/")
}

    return (
        <div className='navbar'>
           <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
           <ul className="navbar-menu">
            <Link to='/' onClick={()=>setmenu("Home")} className={menu === "Home" ? "active" :""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setmenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
            <a href='#app-download' onClick={()=>setmenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
            <a href='#footer' onClick={()=>setmenu("contacts")} className={menu === "contacts" ? "active" : ""}>Contacts</a>
           </ul>
           <div className="navbar-right">
            <div className="navbar-search-icon">
                <Link to='/cart'><img onClick={()=>setmenu("cart")} className={menu === "cart" ? "activa" : ""} src={assets.basket_icon} alt="" /></Link>
                <div className='dot'></div>
            </div>
            {!token?<button onClick={()=>setshowlogin(true)}>Sign In</button>
            :<div className='navbar-profile'>
              <img src={assets.profile_icon} alt="" />
              <ul className="nav-profile-dropdown">
               <li onClick={()=>{navigate('/myorders')}}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
               <hr />
               <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>    
              </ul>  
            </div>}
            
           </div>
        </div>
    )
}

export default Navbar
