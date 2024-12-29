import React, { useContext } from 'react'
import "./Cart.css"
import { Storecontext } from '../../Context/Storecontext'
import { useNavigate } from 'react-router-dom';

function Cart() {
    const {cartitem,food_list,removefromcart,gettotalcartamount,url} = useContext(Storecontext);
    const navigate = useNavigate();

    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-item-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item,index)=>{
                    if(cartitem[item._id]>0){
                        return(
                           <div>
                             <div key={item._id} className="cart-item-title cart-items-item">
                              <img src={url+"/images/"+item.image} alt="" />
                              <p>{item.name}</p>
                              <p>₹{item.price}</p>
                              <p>{cartitem[item._id]}</p>
                              <p>₹{item.price*cartitem[item._id]}</p>
                              <p onClick={()=>removefromcart(item._id)} className='cross'>❌</p>
                            </div>
                            <hr />
                           </div>
                        )
                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>SubTotal</p>
                            <p>₹{gettotalcartamount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>₹{gettotalcartamount()===0?0:50}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>₹{gettotalcartamount()===0?0:gettotalcartamount()+50}</b>
                        </div>
                    </div>
                        <button onClick={()=>navigate('/Placeorder')}>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
