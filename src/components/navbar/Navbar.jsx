import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons
import Logo from "../../assets/images/logo.svg";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="w-[90%] bg-transparent lg:w-[80%] mx-auto mt-6 text-white text-base font-normal inter">
      <div className="flex justify-between items-center">
        <a href="">
          <img className="img-fluid" src={Logo} alt="Logo" />
        </a>
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-7">
          <ul className="flex gap-7">
            <li className=" text-[#B4B4B4]">
              <a href="">How it Works</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Reviews</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>

        <button
          className="lg:hidden bg-transparent rounded-lg border-2 border-[#61A5DF] py-2 px-1 text-white"
          onClick={toggleDrawer}
        >
          {isDrawerOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div className="hidden lg:flex gap-7">
          <button className="underline underline-offset-4">Login</button>
          <button className="buttons-gradiant px-6 py-4 rounded-lg">
            Sign Up
          </button>
        </div>
      </div>

      {isDrawerOpen && (
        <div className="fixed h-[100vh]  bg-[#087eda] z-50 flex flex-col p-6 overflow-hidden lg:hidden bottom-0">
          <div className="flex justify-between items-center w-full mb-6">
            <a href="">
              <img className="img-fluid" src={Logo} alt="Logo" />
            </a>
            <button className="text-white" onClick={toggleDrawer}>
              <FaTimes size={24} />
            </button>
          </div>
          <ul className="flex flex-col gap-6 w-full">
            <li>
              <a href="" onClick={toggleDrawer}>
                How it Works
              </a>
            </li>
            <li>
              <a href="" onClick={toggleDrawer}>
                Features
              </a>
            </li>
            <li>
              <a href="" onClick={toggleDrawer}>
                FAQs
              </a>
            </li>
            <li>
              <a href="" onClick={toggleDrawer}>
                Reviews
              </a>
            </li>
            <li>
              <a href="" onClick={toggleDrawer}>
                Pricing
              </a>
            </li>
            <li>
              <a href="" onClick={toggleDrawer}>
                Contact Us
              </a>
            </li>
          </ul>
          <div className="flex flex-col gap-6 mt-6 w-full">
            <button
              className="underline underline-offset-4"
              onClick={toggleDrawer}
            >
              Login
            </button>
            <button
              className="buttons-gradiant px-6 py-4 rounded-lg"
              onClick={toggleDrawer}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
