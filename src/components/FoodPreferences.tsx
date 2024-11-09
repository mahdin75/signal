import React from "react";
import "./foodpreferences.css";
import { FoodItemType } from "../types";

function FoodPreferences(props: { foodItems: FoodItemType[] }) {
  return (
    <div className="food-cards-container">
      {props.foodItems?.map((item: FoodItemType) => {
        return (
          <div className="food-card">
            {item.foodImg}
            <p>{item.foodAmount}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FoodPreferences;
