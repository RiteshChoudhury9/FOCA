import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Stores/Storecontext";
const PlaceOrder = () => {
  const {getTotalcartAmount}= useContext(StoreContext)
  return (
    <form className="placeorder">
      <div className="placeorder-left">
        <p className="title">Delivery Information</p>
        <div className="multi-feild">
          <input type="text" placeholder="first name" />
          <input type="text" placeholder="last name" />
        </div>
        <input type="email" placeholder="your email" />
        <input type="text" placeholder="street" />
        <div className="multi-feild">
          <input type="text" placeholder="city" />
          <input type="text" placeholder="state" />
        </div>
        <div className="multi-feild">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="country" />
        </div>
        <input type="text" placeholder="phone" />
      </div>
      <div className="placeorder-right">
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
          <button >Proceed to Payment</button>
          
        </div>

      </div>
    </form>
  );
};

export default PlaceOrder;
