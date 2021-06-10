import React from "react";

export default function BtnComponent({ placeholder, btnStyle, icon, type }) {
  return (
    <button className="form__btn" style={btnStyle} type={type}>
      {placeholder}
      {icon}
    </button>
  );
}
