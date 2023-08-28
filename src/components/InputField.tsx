import React from "react";

const InputField = ({ type, placeholder, name, value, onChange}: props) => {
  return (
    <>
    <label>{placeholder}</label>
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
    </>
   
  );
};

export default InputField;
