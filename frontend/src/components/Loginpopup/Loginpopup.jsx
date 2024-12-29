import React, { useContext, useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
import { Storecontext } from '../../Context/Storecontext'
import axios from "axios"

function Loginpopup({setshowlogin}) {

    const {url,setToken} = useContext(Storecontext)
     
    const [currstate, setcurrstate] = useState("Login")
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })
    const onChangeHandler = (event) =>{
       const name = event.target.name;
       const value = event.target.value;
       setData(data=>({...data,[name]:value}))
    }

    const onLogin = async(event)=>{
       event.preventDefault()
       let newUrl = url;
       if (currstate==="Login") {
        newUrl += "/api/user/login"
       }
       else{
        newUrl += "/api/user/register"
       }
       const response = await axios.post(newUrl,data);
       if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token)
        setshowlogin(false)
       }
       else{
        alert(response.data.message)
       }
    }

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-title">
                    <h2>{currstate}</h2>
                    <img onClick={()=>setshowlogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-input">
                    {currstate==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text"  placeholder='your name' required/>}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='your email' required/>
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='password' required />
                </div>
                <button type='submit'>{currstate==='Sign Up'?"Create Account":"Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p>By continuing, i agree the terms of use and privacy policy.</p>
                </div>
                {currstate==="Login"
                ?<p>Create a new Account? <span onClick={()=>setcurrstate("Sign Up")}>Sign Up</span></p>
                :<p>Already have an Account? <span onClick={()=>setcurrstate("Login")}>Login</span></p>
                }
                
                
            </form>
        </div>
    )
}

export default Loginpopup
