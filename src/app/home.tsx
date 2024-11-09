import React from "react";
import "./home.css";

interface User {
  name?: string;
}

function Home(user: User) {
  return <div className="home">Home</div>;
}

export default Home;
