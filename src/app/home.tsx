import React, { useState } from "react";
import "./home.css";
import FoodPreferences from "../components/FoodPreferences";

interface User {
  name?: string;
}

function Home(user: User) {
  const [foodItmes] = useState([
    {
      foodImg: <img alt="10mg" src="" />,
      foodAmount: "10mg",
      foodDescription: "helllo food",
    },
    {
      foodImg: <img alt="10mg" src="" />,
      foodAmount: "10mg",
      foodDescription: "helllo food",
    },
    {
      foodImg: <img alt="10mg" src="" />,
      foodAmount: "10mg",
      foodDescription: "helllo food",
    },
    {
      foodImg: <img alt="10mg" src="" />,
      foodAmount: "10mg",
      foodDescription: "helllo food",
    },
  ]);
  return (
    <div className="home">
      <FoodPreferences foodItems={foodItmes} />
    </div>
  );
}

export default Home;
