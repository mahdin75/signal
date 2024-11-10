import React from "react";
import "./input.css";

interface InputPropsType {
  label: string;
  onChange?: any;
  name?: string;
}

function Input(props: InputPropsType) {
  return (
    <div className="input-container">
      <p>{props.label}</p>
      <input
        type="text"
        onChange={(e: any) => props?.onChange(props.name, e.target.value)}
      />
    </div>
  );
}

export default Input;
