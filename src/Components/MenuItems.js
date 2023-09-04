import React from "react";
import { MdOutlineDeliveryDining } from "react-icons/md";
function MenuItems({ dish }) {
  return (
    <div className="menu-item">
      <img src={dish.photo} alt="" />

      <div className="menu-item-content">
        <div className="item-name-price">
          <p>{dish.name}</p> <p>{dish.price}</p>
        </div>
        <p className="item-description">{dish.description}</p>
        <p className="delivery">
          Order for delivery
          <MdOutlineDeliveryDining />{" "}
        </p>
      </div>
    </div>
  );
}

export default MenuItems;
