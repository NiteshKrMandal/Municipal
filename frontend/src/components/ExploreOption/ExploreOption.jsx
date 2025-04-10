import React from "react";
import "./ExploreOption.css";
import { menu_list } from "../../assets/assets";

const ExploreOption = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Select From Our Service</h1>
      <p className="explore-menu-text">
        Select the Servive you want to Avail Online
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreOption;
