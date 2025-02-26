import React, { useState } from 'react'
import Navbar from './Component/Navbar/Navbar'
import { assets } from './assets/assets'
import { Routes, Route } from 'react-router-dom'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import Footer from './Component/Footer/Footer'
import AppDownload from './Component/AppDownload/AppDownload'
import Loginpopup from './Component/Loginpopup/Loginpopup'

const App = () => {

  const[showLogin  , setShowlogin]= useState(false)
  return (<>
    {showLogin?<Loginpopup setShowlogin = {setShowlogin} />:<></>}
    <div className='app'>
      <Navbar setShowlogin = {setShowlogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path ='/cart' element={<Cart/>} />
        <Route path ='/order' element={<PlaceOrder/>} />
      </Routes>
    </div>
    <AppDownload/>
    <Footer />
    </>
  )
}

export default App
