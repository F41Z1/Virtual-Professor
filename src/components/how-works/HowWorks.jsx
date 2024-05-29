import React, { Component } from "react";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../../assets/images/hw-1.png";
import img2 from "../../assets/images/hw-2.png";
import Startedbutton from "./button.jsx";

export class HowWorks extends Component {
  render() {
    return (
      <div
        id="howitworks"
        className="bg-white lg:py-12 py-6 w-[90%] lg:w-[80%] mx-auto"
      >
        <h1 className="text-black font-bold lg:text-[50px] text-[32px] text-center">
          How It Works
        </h1>

        <div>
          <div className=" grid  lg:grid-cols-2 lg:gap-20 gap-0 mt-4 lg:mt-10">
            <div className=" ">
              <img src={img1} alt="" className=" " />
            </div>
            <div className="xl:mt-16 lg:mt-10 mt-0 ">
              <button className="number-bg px-4 py-2 rounded-lg text-white ">
                1
              </button>
              <h1 className="xl:text-[40px] lg:text-4xl text-[32px] leading-[36px] lg:leading-10 xl:leading-[50px] font-bold my-3 xl:my-5">
                Create your Virtual <br /> Professor account
              </h1>
              <p className="hidden lg:block text-[#6F7071] ">
                Creating your account takes just seconds, letting you dive{" "}
                <br className="hidden xl:block" /> into our platform without any
                delays. We know your time is <br className="hidden xl:block" />{" "}
                precious, so we've made it incredibly easy to get started.
              </p>
              <p className="block lg:hidden  text-[#6F7071] text-[15px]">
                Creating your account takes just seconds,{" "}
                <br className="block sm:hidden" /> letting you dive into our
                platform without <br className="block sm:hidden" /> any delays.
              </p>

              <Startedbutton />
            </div>
          </div>
          <div className=" grid  lg:grid-cols-2 lg:gap-20 gap-0 mt-4 lg:mt-10">
            <div className=" block lg:hidden ">
              <img src={img1} alt="" className=" " />
            </div>
            <div className="xl:mt-16 lg:mt-10 mt-0  ">
              <button className="number-bg px-4 py-2 rounded-lg text-white ">
                2
              </button>
              <h1 className="xl:text-[40px] lg:text-4xl text-[32px] leading-[36px] lg:leading-10 xl:leading-[50px] font-bold my-3 xl:my-5">
                Install Virtual <br className="hidden lg:block" /> Professor
                from the <br className="hidden lg:block" /> Google Chrome Store
              </h1>
              <p className=" text-[#6F7071] text-[15px] lg:text-base ">
                Easily download and install our app from the highly{" "}
                <br className="hidden xl:block" />
                trustworthy Google Chrome Store, known for its user-
                <br className="hidden xl:block" /> riendly interface and
                lightning-fast installation process.
                <br className="hidden xl:block" />
                Get started in seconds.
              </p>

              <Startedbutton />
            </div>
            <div className=" lg:block hidden ">
              <img src={img2} alt="" className=" " />
            </div>
          </div>
          <div className=" grid  lg:grid-cols-2 lg:gap-20 gap-0 mt-4 lg:mt-10">
            <div className=" ">
              <img src={img1} alt="" className=" " />
            </div>
            <div className="xl:mt-16 lg:mt-10 mt-0 ">
              <button className="number-bg px-4 py-2 rounded-lg text-white ">
                3
              </button>
              <h1 className="xl:text-[40px] lg:text-4xl text-[32px] leading-[36px] lg:leading-10 xl:leading-[50px] font-bold my-3 xl:my-5">
                Get your Answers By Using The Screenshot Button Or The Text
                Selection Feature
              </h1>
              <p className=" text-[#6F7071] text-[15px] lg:text-base ">
                Accurately and Discreetly get the answers you need, when{" "}
                <br className="hidden xl:block" /> you need them. Whether using
                the screenshot button or <br className="hidden xl:block" /> the
                text selection feature, your solutions are just a click{" "}
                <br className="hidden xl:block" /> away.
              </p>

              <Startedbutton />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowWorks;
