import React, { useState } from "react";
import "./home.css";
import FoodPreferences from "../components/FoodPreferences";
import { FoodItemType } from "../types";
import FoodImageIcon from "../assets/icons/food_image_cover.jpeg";

interface User {
  name?: string;
  foodItems: FoodItemType[];
}

function Home() {
  const [users] = useState([
    {
      name: "Jack",
      foodItems: [
        {
          foodImg: <img alt="10mg" src={FoodImageIcon} />,
          foodAmount: "10mg",
          foodDescription: "helllo food",
        },
        {
          foodImg: <img alt="10mg" src={FoodImageIcon} />,
          foodAmount: "10mg",
          foodDescription: "helllo food",
        },
        {
          foodImg: <img alt="10mg" src={FoodImageIcon} />,
          foodAmount: "10mg",
          foodDescription: "helllo food",
        },
        {
          foodImg: <img alt="10mg" src={FoodImageIcon} />,
          foodAmount: "10mg",
          foodDescription: "helllo food",
        },
      ],
    },
    {
      name: "Jack",
      foodItems: [
        {
          foodImg: <img alt="10mg" src={FoodImageIcon} />,
          foodAmount: "10mg",
          foodDescription: "helllo food",
        },
        {
          foodImg: <img alt="10mg" src={FoodImageIcon} />,
          foodAmount: "10mg",
          foodDescription: "helllo food",
        },
        {
          foodImg: <img alt="10mg" src={FoodImageIcon} />,
          foodAmount: "10mg",
          foodDescription: "helllo food",
        },
        {
          foodImg: <img alt="10mg" src={FoodImageIcon} />,
          foodAmount: "10mg",
          foodDescription: "helllo food",
        },
      ],
    },
  ]);
  return (
    <div className="home">
      <h2>Food Preferences</h2>
      <div className="preferences">
        {users.map((user: User) => {
          return (
            <div className="user-preferences">
              <h3>{user.name}</h3>
              <FoodPreferences foodItems={user.foodItems} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
