import React from "react";
import "./select.css";
import { FieldError } from "react-hook-form";

interface SelectPropsType {
  label: string;
  options: string[];
  inputProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
  error?: FieldError;
}

function Select({ label, options, inputProps, error }: SelectPropsType) {
  return (
    <div className="select-container">
      <p>{label}</p>
      <select {...inputProps}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <span className="error-message">{error.message}</span>}
    </div>
  );
}

export default Select;
