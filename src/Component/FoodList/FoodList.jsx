import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./FoodList.css";
import { StoreContext } from "../../Stores/Storecontext";

const FoodList = ({ item }) => {
  const { addTocart, removeFromcart, cartItem, setcartItem } = useContext(StoreContext);
  const [itemcount, setitemCount] = useState(0);
  return (
    <div className="fooditem-container">
      <div className="food-item-image-container">
        <img className="fooditem-image" src={item.image} alt="" />

        {!cartItem[item._id] ? (
          <img
            className="add"
            onClick={() =>addTocart(item._id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="fooditem-counter">
            <img
              onClick={() => addTocart(item._id)}
              src={assets.add_icon_green}
              alt=""
            />
            <p>{cartItem[item._id]}</p>
            <img
              onClick={() =>removeFromcart(item._id)}
              src={assets.remove_icon_red}
              alt=""
            />
          </div>
        )}
      </div>

      <div className="fooditem-info">
        <div className="fooditem-name-rating">
          <p>{item.name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="fooditem-description">{item.description}</p>
        <p className="fooditem-price">${item.price}</p>
      </div>
    </div>
  );
};

export default FoodList;
