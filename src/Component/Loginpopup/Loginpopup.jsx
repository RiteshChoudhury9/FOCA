import React, { useState } from "react";
import "./Loginpopup.css";
import { assets } from "../../assets/assets";

const Loginpopup = ({ setShowlogin }) => {
  const [currstatus, setcurrstatus] = useState("Login");
  return (
    <div className="loginpopup">
      <form className="loginpopup-container">
        <div className="loginpopup-title">
          <h2>{currstatus}</h2>
          <img
            onClick={() => setShowlogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="loginpopup-inputs">
          {currstatus === "Sign-Up" ? (
            <input type="text" placeholder="Your Name" required />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Your@email" required />
          <input type="password" placeholder="*******" required />
        </div>
        <button>{currstatus === "Sign-Up" ? "Create Account" : "Login"}</button>
        <div className="loginpopup-tc">
            <input type="checkbox" required />
            <p>By continuing , i agree to the term and condition and private poiices</p>
        </div>
        {
          currstatus === "Sign-Up" ? <p>Already have a account <span onClick={()=>setcurrstatus("Login")}>click here</span></p> :
          <p>Create a new account <span onClick={()=>setcurrstatus("Sign-Up")}>click here</span></p>
        }
      </form>
    </div>
  );
};

export default Loginpopup;
