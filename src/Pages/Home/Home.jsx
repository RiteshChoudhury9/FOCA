import React, { useState } from 'react'
import "./Home.css"
import Header from '../../Component/Header/Header'
import Menu from '../../Component/ExploreMenu/Menu'
import FoodDisplay from '../../Component/FoodDisplay/FoodDisplay'
const Home = () => {
    const [category, setCategory]= useState("All")
  return (
    <div>
      <Header/>
      <Menu category = {category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home
