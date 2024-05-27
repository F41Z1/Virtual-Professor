import React from "react";

const RatingSection = () => {
  return (
    <div className="bg-[#519BDB] h-auto">
      <div className="w-[90%] lg:w-[80%] mx-auto flex justify-between items-center">
        <div className="flex justify-between items-center w-[100%] lg:w-[80%] mx-auto py-3 lg:py-6 text-white">
          <div className="flex flex-col justify-center items-center  ">
            <h1 className=" text-[26px] lg:text-[50px] font-bold">20K+</h1>
            <p className="lg:text-[20px] text-base font-medium text-center">
              Worldwide Users
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="  text-[26px] lg:text-[50px] font-bold">1M+</h1>
            <p className="lg:text-[20px] text-base font-medium text-center ">
              Questions Solved
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className=" text-[26px] lg:text-[50px] font-bold">100+</h1>
            <p className="lg:text-[20px] text-base font-medium text-center">
              5 Star Reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingSection;
