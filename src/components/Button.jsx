import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      className="text-white font-semibold tracking-wide capitalize py-2 px-5 rounded-lg bg-orange-500 hover:bg-orange-600 duration-150 transition-colors"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
