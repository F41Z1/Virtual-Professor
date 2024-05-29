import React from "react";
import { FaArrowRight } from "react-icons/fa";

const MyButton = () => {
  return (
    <button className="buttons-gradiant1 text-white flex gap-2 py-3 px-6 mt-5 rounded-lg items-center">
      Get Started
      <FaArrowRight style={{ color: "white" }} />
    </button>
  );
};

export default MyButton;
