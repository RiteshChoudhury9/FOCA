import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../Stores/Storecontext'
import FoodList from '../FoodList/FoodList'

const FoodDisplay = ({category}) => {

    const { food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Best food near you</h2>
        <div className="food-displaylist">
        {food_list.map((item, index)=>{
          if(category === "All" || category===item.category){
            return <FoodList key={index} item= {item} />

          }
        })}
         
    </div>
    </div>

  )
}

export default FoodDisplay
