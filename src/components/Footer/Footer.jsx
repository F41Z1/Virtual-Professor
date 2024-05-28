import React from "react";
import Logo from "../../assets/images/footerlogo.png";
import { MdOutlineEmail } from "react-icons/md";
import Facebook from "../../assets/images/Facebook.svg";
import Instagram from "../../assets/images/Instagram.svg";
import Youtube from "../../assets/images/Youtube.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Twitter from "../../assets/images/Twitter.svg";

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="grid lg:grid-cols-3 grid-col-1 gap-10 w-[90%] lg:w-[80%] mx-auto pt-10">
        <div>
          <img src={Logo} alt="" />
          <p className="text-sm text-white mt-2">
            Virtual Professor is an AI-powered learning solution that helps
            students excel in their studies. With accurate answers,
            comprehensive explanations, and seamless integration, we make
            learning faster and more accessible. Join us and unlock your full
            learning potential.
          </p>
        </div>
        <div className="flex justify-between  items-start text-white text-base leading-[25px]">
          <div>
            <ul>
              <li>
                <a href="">How It Works</a>
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
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <p>INFORMATION:</p>
              <li>
                <a href="">Account</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Terms of Service</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Refund Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-white">
          <p className="text-base"> Subscribe to Our Newsletter</p>
          <p className="text-sm py-3">
            Time is the most precious thing you have when bootstrapping. You
            can't take time.
          </p>

          <form className="flex justify-between  text-black bg-white py-1 px-2 items-center rounded-lg">
            <div className="relative flex items-center w-auto  md:mb-0">
              <MdOutlineEmail
                style={{ width: "40px", height: "30px" }}
                className="absolute text-gray-400"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="pl-10 pr-4 py-2 rounded-lg border-0 focus:outline-none w-full"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 footer-bg text-white rounded-lg w-auto md:ms-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <hr className=" bg-white my-7" />
      <div className="hidden  w-[80%] mx-auto lg:flex   justify-between items-center pb-7">
        <p className="text-white text-sm">© 2023 All rights reserved</p>

        <div className="flex space-x-4 ">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="LinkedIn" className="h-8 w-8" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="Facebook" className="h-8 w-8" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Youtube} alt="YouTube" className="h-8 w-8" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" className="h-8 w-8" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter} alt="Twitter" className="h-8 w-8" />
          </a>
        </div>

        <div className="text-sm text-white gap-8 flex">
          <p>Privacy Policy</p>
          <p>Terms and conditions</p>
        </div>
      </div>
      <div className=" lg:hidden w-[90%]  mx-auto flex flex-col  justify-center items-center pb-7">
        <div className="flex space-x-4 ">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="LinkedIn" className="h-8 w-8" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="Facebook" className="h-8 w-8" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Youtube} alt="YouTube" className="h-8 w-8" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" className="h-8 w-8" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter} alt="Twitter" className="h-8 w-8" />
          </a>
        </div>

        <div className="text-sm text-white gap-8 flex py-2 ">
          <p>© 2023 All rights reserved</p> <p>Privacy Policy</p>
        </div>
        <p className="text-white text-sm">Terms and conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
