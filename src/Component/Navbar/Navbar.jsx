import React, { useContext, useState } from 'react'
import "./Navbar.css";
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Stores/Storecontext';

function Navbar({setShowlogin}) {
    const [menu, setMenu]= useState("Menu")
    const {getTotalcartAmount} = useContext(StoreContext)
  return (
    <div className='navbar'>
      <Link to="/">
      <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className='navbar-menu'>
        <Link to="/" onClick={()=>setMenu("Home")} className={menu === "Home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu === "Menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu("Mobile-App")} className={menu === "Mobile-App"?"active":""}>Mobile-App</a>
        <a href='#footer' onClick={()=>setMenu("Contact-us")} className={menu === "Contact-us"?"active":""}>Contact-us</a>
      </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
              <Link to='/cart'>
                <img  src={assets.basket_icon
                } alt="" /></Link>
                <div className={getTotalcartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowlogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar
