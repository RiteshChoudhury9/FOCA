import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Stores/Storecontext";
import { assets } from "../../assets/assets";
import {  useNavigate } from "react-router-dom";


const Cart = () => {
  const { cartItem, food_list, removeFromcart,getTotalcartAmount } = useContext(StoreContext);
  const navigate = useNavigate()
  return (
    <div className="cart">
      <div className="cartitem">
        <div className="cart-item-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div className="cart-item-title cart-item-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>${item.price * cartItem[item._id]}</p>
                <p onClick={() => removeFromcart(item._id)} className="cross">
                  __
                </p>
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <div>
            <h2>Cart Total</h2>
            <hr />
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalcartAmount()}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${ getTotalcartAmount()===0?0:2 }</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalcartAmount()===0?0:getTotalcartAmount()+2}</p>
            </div>
            <hr />
          </div>
          <button onClick={()=>navigate('/order')}>Proceed to Checkout</button>
          
        </div>
        <div className="cart-promocode">
          <div>
            <p>if you have a promocode, enter it here </p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promocode" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
