import React from "react";
import "./input.css";
import { FieldError } from "react-hook-form";

interface InputPropsType {
  label: string;
  type?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  error?: FieldError;
}

function Input({ label, type = "text", inputProps, error }: InputPropsType) {
  return (
    <div className="input-container">
      <p>{label}</p>
      <input type={type} {...inputProps} />
      {error && <span className="error-message">{error.message}</span>}
    </div>
  );
}

export default Input;
