import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setcartItem] = useState({});

  const addTocart = (itemId) => {
    if (!cartItem[itemId]) {
      setcartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromcart = (itemId) => {
    setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  // useEffect(()=>{
  //   console.log("useEffect is working")
  // },[cartItem])
  const getTotalcartAmount = () => {
    let totalamount = 0;
    for (const item in cartItem) {
      if (cartItem[item]> 0) {
        let iteminfo = food_list.find((product) => product._id === item);
        totalamount += iteminfo.price * cartItem[item];
      }
    }
    return totalamount;

  };

  const contextValue = {
    food_list,
    addTocart,
    removeFromcart,
    cartItem,
    setcartItem,
    getTotalcartAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
