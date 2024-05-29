import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons
import Logo from "../../assets/images/logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleLoginClick = () => {
    const loginForm = document.getElementById("Loginpage");
    if (loginForm) {
      loginForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isDrawerOpen]);

  return (
    <div className="w-[95%] xl:w-[80%] bg-transparent  mx-auto mt-6 text-white text-base font-normal inter">
      <div className="flex justify-between items-center">
        <a href="">
          <img className="img-fluid" src={Logo} alt="Logo" />
        </a>
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-7">
          <ul className="flex gap-7 ">
            <li className="hover:text-[#B4B4B4]">
              <AnchorLink href="#howitworks">How it Works</AnchorLink>
            </li>
            <li className="hover:text-[#B4B4B4]">
              <AnchorLink href="#Features">Features</AnchorLink>
            </li>
            <li className="hover:text-[#B4B4B4]">
              <AnchorLink href="#FAQs">FAQs</AnchorLink>
            </li>
            <li className="hover:text-[#B4B4B4]">
              <AnchorLink href="#reviews">Reviews</AnchorLink>
            </li>
            <li className="hover:text-[#B4B4B4]">
              <AnchorLink href="#plancard">Pricing</AnchorLink>
            </li>
            <li className="hover:text-[#B4B4B4]">
              <AnchorLink href="#contectus">Contact Us</AnchorLink>
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
          <button className="hover:underline hover:underline-offset-8">
            <a onClick={handleLoginClick} href="#Loginpage">
              Login
            </a>
          </button>
          <button className="buttons-gradiant px-6 py-4 rounded-lg">
            <a href=""> Sign Up</a>
          </button>
        </div>
      </div>

      {isDrawerOpen && (
        <div className="fixed h-[100vh] inset-0 bg-[#087eda] z-50 flex flex-col p-6 overflow-y-hidden lg:hidden bottom-0">
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
              <AnchorLink href="#howitworks" onClick={toggleDrawer}>
                How it Works
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#Features" onClick={toggleDrawer}>
                Features
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#FAQs" onClick={toggleDrawer}>
                FAQs
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#reviews" onClick={toggleDrawer}>
                Reviews
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#plancard" onClick={toggleDrawer}>
                Pricing
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contectus" onClick={toggleDrawer}>
                Contact Us
              </AnchorLink>
            </li>
          </ul>
          <div className="flex flex-col gap-6 mt-6 w-full">
            <button onClick={toggleDrawer}>Login</button>
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
