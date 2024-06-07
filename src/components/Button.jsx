import React from "react";

function Button({ children, type, onClick }) {
  return (
    <button className={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
