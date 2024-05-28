// src/components/SliderComponent.js
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa6";
import userimg1 from "../../assets/images/rev1.png";
import userimg2 from "../../assets/images/rev2.png";
import userimg3 from "../../assets/images/rev3.png";

const SliderComponent = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="p-4">
      <div className="w-[80%] mx-auto">
        <h2 className="text-[36px] lg:text-[46px] text-black font-bold text-start mb-4">
          Our Reviews
        </h2>
        <div className="relative flex justify-between items-center">
          <p className="text-base font-normal text-[#646464]">
            Discover what others are saying! Read through our reviews to see the
            impact our <br className="hidden lg:block" /> service has had for
            their learning experience
          </p>
          <div className="lg:flex hidden justify-end items-center gap-1 mb-4">
            <button
              className="hover:text-white text-[#041B29] px-3 py-2 rounded-lg bg-transparent hover:bg-gradient-to-r from-[#1b4464] to-[#076dbc] border-2 hover:border-0 border-black mr-5"
              onClick={prevSlide}
            >
              &lt;
            </button>
            <button
              className="hover:text-white text-[#041B29] px-3 py-2 rounded-lg bg-transparent hover:bg-gradient-to-r from-[#1b4464] to-[#076dbc] border-2 hover:border-0 border-black mr-5"
              onClick={nextSlide}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
      <Slider
        className="w-[90%] mx-auto lg:mx-0 lg:ms-auto"
        ref={sliderRef}
        {...settings}
      >
        <div className="p-4 ">
          <div className="review-bg rounded-lg p-6 h-full">
            <p className="mb-4 font-medium text-base text-[#041B29]">
              "Having an assistant on your browser is something everyone should
              do. Don't use it to just get answers, obviously utilize the
              explanation feature so you can understand what you're learning."
            </p>
            <div className="flex items-center">
              <img
                src={userimg1}
                alt="Michael H."
                className="w-12 lg:w-14 mr-4"
              />
              <div>
                <p className="font-medium text-xl text-black">Michael H.</p>
                <p className="font-normal text-sm text-[#808080]">
                  Electrical Engineering
                </p>
              </div>
            </div>
            <div className="flex mt-3">
              <FaStar className="icon golden-star" />
              <FaStar className="icon golden-star" />
              <FaStar className="icon golden-star" />
              <FaStar className="icon golden-star" />
              <FaStar className="icon golden-star" />
            </div>
            <p className="text-base text-[#041B29]">4.9/5 Rating</p>
          </div>
        </div>
        <div className="p-4 ">
          {" "}
          <div className="review-bg rounded-lg p-6 h-full">
            <p className="mb-4 font-medium text-base text-[#041B29]">
              "Having this on my computer has made me less anxious in class,
              even if I missed something I know I can always access the
              extension later to get explanations on things I missed"
            </p>
            <div className="flex items-center">
              <img
                src={userimg2}
                alt="Jessica R."
                className="w-12 lg:w-14 mr-4"
              />
              <div>
                <p className="font-medium text-xl text-black">Jessica R.</p>
                <p className="font-normal text-sm text-[#808080]">
                  Business Administration
                </p>
              </div>
            </div>
            <div className="flex mt-3">
              <FaStar className="icon golden-star" />
              <FaStar className="icon golden-star" />
              <FaStar className="icon golden-star" />
              <FaStar className="icon golden-star" />
              <FaStar className="icon golden-star" />
            </div>
            <p className="text-base text-[#041B29]">4.9/5 Rating</p>
          </div>
        </div>
        <div className="p-4 ">
          <div className="review-bg rounded-lg p-6 h-full ">
            <p className="mb-4 font-medium text-base text-[#041B29]">
              "Ive been using it for about two weeks now and they’ve updated it
              almost weekly with new features. Its cool that they’re continually
              improving it.” <br /> <br />
            </p>
            <div className="flex items-center">
              <img
                src={userimg3}
                alt="Benjamin K."
                className="w-12 lg:w-14 mr-4"
              />
              <div>
                <p className="font-medium text-xl text-black">Benjamin K.</p>
                <p className="font-normal text-sm text-[#808080]">
                  Business Administration
                </p>
              </div>
            </div>
            <div className="flex mt-3">
              <FaStar className="icon golden-star" />
              <FaStar className="icon golden-star" />
              <FaStar className="icon golden-star" />
              <FaStar className="icon golden-star" />
              <FaStar className="icon golden-star" />
            </div>
            <p className="text-base text-[#041B29]">4.9/5 Rating</p>
          </div>
        </div>
      </Slider>
      <div className="lg:hidden flex justify-center  items-center gap-1 my-4">
        <button
          className="hover:text-white text-[#041B29] px-3 py-2 rounded-lg bg-transparent hover:bg-gradient-to-r from-[#1b4464] to-[#076dbc] border-2 hover:border-0 border-black mr-5"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button
          className="hover:text-white text-[#041B29] px-3 py-2 rounded-lg bg-transparent hover:bg-gradient-to-r from-[#1b4464] to-[#076dbc] border-2 hover:border-0 border-black mr-5"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default SliderComponent;
