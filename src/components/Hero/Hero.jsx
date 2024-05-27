import React from "react";
import Navbar from "../navbar/Navbar";
import HeroImg from "../../assets/images/hero-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const HeroSection = () => {
  return (
    <div className="  flex flex-col  justify-center hero-bg">
      <Navbar />
      <div className="w-[90%] mr-auto lg:mr-0 ms-auto lg:ms-auto py-[77px]">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="block lg:hidden">
            <img src={HeroImg} alt="Preview" className="w-full" />
          </div>
          <div className="text-white">
            <h1 className="text-7xl">Work Smarter, Not Harder!</h1>

            <p className="text-lg mt-3 leading-[20px]">
              Take advantage of our advanced A.I technology{" "}
              <br className="hidden lg:block" /> to enhance your learning
            </p>

            <div className="mt-10 flex gap-8 items-center ">
              <button className="buttons-gradiant py-4 px-6 rounded-lg">
                Download Now
              </button>
              <button className=" flex gap-2 items-center">
                <div className="buttons-gradiant w-10 h-10 rounded-full flex justify-center items-center">
                  <FontAwesomeIcon className="ms-1" icon={faPlay} size="lg" />
                </div>
                See How It Works
              </button>
            </div>
          </div>
          <div className="hidden lg:block overflow-hidden">
            <img src={HeroImg} alt="Preview" className="ms-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
