import React from "react";
import visa1 from "../../assets/images/visa1.png";
import visa2 from "../../assets/images/visa2.png";
import visa3 from "../../assets/images/visa3.png";
import visa4 from "../../assets/images/visa4.png";
import visa5 from "../../assets/images/visa5.png";
import Aplus from "../../assets/images/a+.png";
const PlanCard = () => {
  return (
    <div id="plancard" className="w-[90%] lg:w-[80%] mx-auto bg-white pt-5">
      <div className="  text-center my-5">
        <h2 className="lg:text-[40px]  text-4xl font-bold ">
          Choose Your Plan
        </h2>
        <p className="mb-3 text-[#646464] text-base">
          Take advantage of our current offers, they won’t last long!
        </p>
        <div className="plan-card-bg lg:w-[70%] w-[100%] mx-auto rounded-lg py-4 text-white">
          <h3 className="text-[12px] lg:hidden block  py-2 rounded-full text-center font-bold bg-white text-black  sm:w-[30%] w-[70%] mx-auto ">
            72 Hours Unlimited Access
          </h3>
          <h3 className="text-sm lg:block hidden text-center  font-bold ">
            72 Hours Unlimited Access
          </h3>
          <p className="text-[40px] font-bold ">Try For Free</p>
          <p className="lg:text-sm text-[12px] font-normal mb-3">
            Offer Valid Until May 31st
          </p>
          <button className="plan-btn-bg w-[80%] lg:w-[40%] mx-auto lg:font-bold font-normal  py-2 px-4 rounded-lg transition duration-300 ">
            Download Now
          </button>
          <div className="mt-4 text-white font-normal text-sm">
            <p className="hidden lg:block">
              Cancel Anytime | Satisfaction Guaranteed | Renews at $5.99/mo
            </p>
            <p className="block lg:hidden">
              Cancel Anytime | Renews at $5.99/mo
            </p>
          </div>
          <div className="block sm:flex justify-center items-center mt-4 ">
            <div className="flex justify-center items-center gap-1">
              <img src={visa1} alt="Visa" className="w-6" />
              <img src={visa2} alt="MasterCard" className="w-6" />
              <img src={visa3} alt="Amex" className="w-6" />
              <img src={visa4} alt="Discover" className="w-6" />
              <img src={visa5} alt="visa5" className="w-4 " />
            </div>
            <div className="flex justify-center items-center gap-1">
              <img src={Aplus} alt="100%" className="w-6 ml-2" />
              <p className="text-[12px] font-normal">
                1,000,000+ Questions Answered
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
