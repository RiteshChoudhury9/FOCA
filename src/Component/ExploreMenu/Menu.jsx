import React, { useState } from "react";
import "./Menu.css";
import { menu_list } from "../../assets/assets";
const Menu = ({category, setCategory}) => {

  return (
    <div className="explore-menu" id="explore-menu">
      <h2>Explore the Menu</h2>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit amet
        distinctio sapiente id laudantium molestias nihil, praesentium impedit
        iste eligendi dolor itaque enim nisi quisquam, exercitationem provident
        sint corporis veritatis?
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>{
                setCategory(prev => prev===item.menu_name?"All":item.menu_name)
            }} key={index} className="explore-menu-list-item">
              <img className={category === item.menu_name ?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Menu;
