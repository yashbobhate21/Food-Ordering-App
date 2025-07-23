import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const Storecontext = createContext(null)

const Storecontextprovider = (props) => {
const [cartitem, setcartitem] = useState({});

const url = "https://food-ordering-app-yashb.onrender.com"
const [token,setToken] = useState("")
const [food_list,setFoodlist] = useState([])

const addToCart = async (itemId)=>{
   if(!cartitem[itemId]){
    setcartitem((prev)=>({...prev,[itemId]:1}))
   }
   else{
    setcartitem((prev) => ({...prev,[itemId]:prev[itemId]+1}))
   }
   if (token) {
     await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
   }
}

const removefromcart = async (itemId)=>{
    setcartitem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    if (token) {
        await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    }
}
  
const gettotalcartamount = ()=>{
    let totalamount = 0;
    for(const item in cartitem){
        if (cartitem[item]>0) {
            
            let iteminfo = food_list.find((product)=>product._id===item)
            totalamount += iteminfo.price*cartitem[item];
        }
    }
    return totalamount;
}

const fetchFoodlist = async()=>{
    const response = await axios.get(url+"/api/food/list")
    setFoodlist(response.data.data)
}

const loadCartData = async (token) => {
    const response = await axios.post(url+"/api/cart/get",{token},{headers:{token}})
    setcartitem(response.data.cartData)
}

useEffect(()=>{
    async function loadData() {
        await fetchFoodlist();
        if (localStorage.getItem("token")) {
          setToken(localStorage.getItem("token"))
          await loadCartData(localStorage.getItem("token"))
    }
    }
  loadData()
},[])

    const contextValue = {
        food_list,
        cartitem,
        setcartitem,
        addToCart,
        removefromcart,
        gettotalcartamount,
        url,
        token,
        setToken,
    }
    return(
        <Storecontext.Provider value={contextValue}>
           {props.children}
        </Storecontext.Provider>    

    )
}
export default Storecontextprovider
