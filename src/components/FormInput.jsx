import React from "react";
import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
    const {label, errorMessage, onChange, id, ...inputProps} = props;
    const [focused, setFocused] = useState(false);
    const handleFocus = () =>{
        setFocused(true);
    }
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
