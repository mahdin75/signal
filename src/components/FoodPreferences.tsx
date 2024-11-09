import React from "react";
import "./foodpreferences.css";

interface FoodItemType {
  foodImg: React.ReactElement;
  foodAmount: string;
  foodDescription: string;
}

function FoodPreferences(props: { foodItems: FoodItemType[] }) {
  return (
    <div className="food-preferences">
      <h2>Food Preferences</h2>
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
    </div>
  );
}

export default FoodPreferences;
