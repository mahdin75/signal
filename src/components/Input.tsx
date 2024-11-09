import React from "react";
import "./input.css";

interface InputPropsType {
  label: string;
}

function Input(props: InputPropsType) {
  return (
    <div className="input-container">
      <p>{props.label}</p>
      <input type="text" />
    </div>
  );
}

export default Input;
