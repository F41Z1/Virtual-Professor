import React from "react";
import Navbar from "../navbar/Navbar";
import HeroImg from "../../assets/images/hero-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const HeroSection = () => {
  return (
    <div className="  flex flex-col  justify-center hero-bg">
      <Navbar />
      <div className="w-[90%]  mr-auto lg:mr-0 ms-auto lg:ms-auto lg:py-[77px] py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="block lg:hidden">
            <img src={HeroImg} alt="Preview" className="w-full" />
          </div>
          <div className="text-white  ">
            <h1 className="xl:text-7xl lg:text-5xl  text-4xl">
              Work Smarter, Not Harder!
            </h1>

            <p className="lg:text-lg text-base mt-3 leading-[20px]">
              Take advantage of our advanced <br className="block lg:hidden" />{" "}
              A.I technology <br className="hidden xl:block" /> to enhance your{" "}
              <br className="block lg:hidden" />
              learning
            </p>

            <div className="lg:mt-10 mt-5 flex gap-3 sm:gap-8 lg:gap-4 xl:gap-8 items-center text-[15px] lg:text-base ">
              <button className="buttons-gradiant py-3  px-2 xl:py-4 xl:px-6 rounded-lg">
                Download Now
              </button>
              <button>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  className="lg:flex gap-2 items-center hidden"
                >
                  <div className="buttons-gradiant w-10 h-10 rounded-full flex justify-center items-center">
                    <FontAwesomeIcon className="ms-1" icon={faPlay} size="lg" />
                  </div>
                  See How It Works
                </a>
              </button>
              <button>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  className=" lg:hidden gap-2 items-center flex "
                >
                  <div className="buttons-gradiant w-10 h-10 rounded-full flex justify-center items-center">
                    <FontAwesomeIcon className="ms-1" icon={faPlay} size="lg" />
                  </div>
                  See Videos
                </a>
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
