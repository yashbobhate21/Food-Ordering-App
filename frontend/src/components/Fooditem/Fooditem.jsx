import React, { useContext } from 'react'
import "./Fooditem.css"
import { assets } from '../../assets/assets'
import { Storecontext } from '../../Context/Storecontext'

function Fooditem({id,name,price,description,image}) {

    const {cartitem,addToCart,removefromcart,url} = useContext(Storecontext)

    return (
        <div className='food-item'>
            <div className="food-item-image-container">
                <img className='food-item-img' src={url+"/images/"+image} alt="" />
                {!cartitem[id] 
                  ? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
                  :<div className='food-item-counter'>
                    <img onClick={()=>removefromcart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartitem[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                  </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-description">{description}</p>
                <p className="food-item-price">₹{price}</p>
            </div>
        </div>
    )
}

export default Fooditem
