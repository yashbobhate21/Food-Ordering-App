import React, { useState } from 'react'
import Navbar from './components/navber/Navbar'
import {Route,Routes} from "react-router-dom"
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from "./pages/Placeorder/Placeorder"
import Footer from './components/Footer/Footer'
import Loginpopup from './components/Loginpopup/Loginpopup'
import Verify from "./pages/Verify/Verify"
import Myorders from './pages/Myorders/Myorders'


function App() {
  const [showlogin,setshowlogin] = useState(false)
  return (
   <>
   {showlogin?<Loginpopup setshowlogin={setshowlogin}/>:<></>}
    <div className='app'>
      <Navbar setshowlogin={setshowlogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Placeorder' element={<Placeorder/>}/>
        <Route path="/verify" element={<Verify/>}/>
        <Route path="/myorders" element={<Myorders/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
