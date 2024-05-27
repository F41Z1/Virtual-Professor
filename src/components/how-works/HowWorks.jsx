import React, { Component } from "react";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../../assets/images/hw-1.png";
import img2 from "../../assets/images/hw-2.png";

export class HowWorks extends Component {
  render() {
    return (
      <div className="bg-white py-12 w-[90%] lg:w-[80%] mx-auto">
        <h1 className="text-black font-bold text-[50px] text-center">
          How It Works
        </h1>

        <div>
          <div className=" grid  lg:grid-cols-2 lg:gap-20 gap-0 mt-4 lg:mt-10">
            <div className=" ">
              <img src={img1} alt="" className=" " />
            </div>
            <div className=" mt-16 ">
              <button className="number-bg px-4 py-2 rounded-lg text-white ">
                1
              </button>
              <h1 className="text-[40px] font-bold leading-[55px] my-3">
                Create your Virtual <br /> Professor account
              </h1>
              <p className="hidden lg:block text-[#6F7071] ">
                Creating your account takes just seconds, letting you dive{" "}
                <br /> into our platform without any delays. We know your time
                is <br /> precious, so we've made it incredibly easy to get
                started.
              </p>
              <p className="block lg:hidden  text-[#6F7071]">
                Creating your account takes just seconds, <br /> letting you
                dive into our platform without <br /> any delays.
              </p>

              <button className="buttons-gradiant1 flex gap-2 py-3 px-6 mt-5 rounded-lg items-center">
                Get Started
                <FaArrowRight style={{ color: "white" }} />
              </button>
            </div>
          </div>
          <div className=" grid  lg:grid-cols-2 lg:gap-20 gap-0 mt-4 lg:mt-10">
            <div className=" block lg:hidden ">
              <img src={img1} alt="" className=" " />
            </div>
            <div className=" mt-16 ">
              <button className="number-bg px-4 py-2 rounded-lg text-white ">
                2
              </button>
              <h1 className="text-[40px] font-bold leading-[45px] my-3">
                Install Virtual <br className="hidden lg:block" /> Professor
                from the <br className="hidden lg:block" /> Google Chrome Store
              </h1>
              <p className=" text-[#6F7071] ">
                Easily download and install our app from the highly{" "}
                <br className="hiiden lg:block" />
                trustworthy Google Chrome Store, known for its user-
                <br className="hiiden lg:block" /> riendly interface and
                lightning-fast installation process.
                <br className="hiiden lg:block" />
                Get started in seconds.
              </p>

              <button className="buttons-gradiant1 flex gap-2 py-3 px-6 mt-5 rounded-lg items-center">
                Get Started
                <FaArrowRight style={{ color: "white" }} />
              </button>
            </div>
            <div className=" lg:block hidden ">
              <img src={img2} alt="" className=" " />
            </div>
          </div>
          <div className=" grid  lg:grid-cols-2 lg:gap-20 gap-0 mt-4 lg:mt-10">
            <div className=" ">
              <img src={img1} alt="" className=" " />
            </div>
            <div className=" mt-16 ">
              <button className="number-bg px-4 py-2 rounded-lg text-white ">
                3
              </button>
              <h1 className="text-[40px] font-bold leading-[45px] my-3">
                Get your Answers By Using The Screenshot Button Or The Text
                Selection Feature
              </h1>
              <p className="hidden lg:block text-[#6F7071] ">
                Accurately and Discreetly get the answers you need, when{" "}
                <br className="hidden lg:block" /> you need them. Whether using
                the screenshot button or <br className="hidden lg:block" /> the
                text selection feature, your solutions are just a click{" "}
                <br className="hidden lg:block" /> away.
              </p>
              <p className=" text-[#6F7071]">
                Creating your account takes just seconds, <br /> letting you
                dive into our platform without <br /> any delays.
              </p>

              <button className="buttons-gradiant1 flex gap-2 py-3 px-6 mt-5 rounded-lg items-center">
                Get Started
                <FaArrowRight style={{ color: "white" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowWorks;
