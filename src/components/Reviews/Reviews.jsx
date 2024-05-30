import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa6";
import userimg1 from "../../assets/images/rev1.png";
import userimg2 from "../../assets/images/rev2.png";
import userimg3 from "../../assets/images/rev3.png";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
const Reviews = () => {
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

  const reviews = [
    {
      text: `"Having an assistant on your browser is something everyone should do. Don't use it to just get answers, obviously utilize the explanation feature so you can understand what you're learning."`,
      imgSrc: userimg1,
      name: "Michael H.",
      field: "Electrical Engineering",
      rating: 4.9,
    },
    {
      text: `"Having this on my computer has made me less anxious in class, even if I missed something I know I can always access the extension later to get explanations on things I missed"`,
      imgSrc: userimg2,
      name: "Jessica R.",
      field: "Business Administration",
      rating: 4.9,
    },
    {
      text: `"Ive been using it for about two weeks now and they’ve updated it almost weekly with new features. Its cool that they’re continually improving it.”`,
      imgSrc: userimg3,
      name: "Benjamin K.",
      field: "Business Administration",
      rating: 4.9,
    },
  ];

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div id="reviews" className="p-4">
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
              className="hover:text-white text-[#041B29] p-3 rounded-lg bg-transparent hover:bg-gradient-to-r from-[#1b4464] to-[#076dbc] border-2  border-[#999999] hover:border-[#076dbc] mr-5"
              onClick={prevSlide}
            >
              <GrFormPrevious />
            </button>
            <button
              className="hover:text-white text-[#041B29] p-3 rounded-lg bg-transparent hover:bg-gradient-to-r from-[#1b4464] to-[#076dbc] border-2  border-[#999999] hover:border-[#076dbc] mr-5"
              onClick={nextSlide}
            >
              <GrFormNext />
            </button>
          </div>
        </div>
      </div>
      <Slider
        className="w-[90%] mx-auto lg:mx-0 lg:ms-auto"
        ref={sliderRef}
        {...settings}
      >
        {reviews.map((review, index) => (
          <div className="p-4" key={index}>
            <div className="review-bg rounded-lg p-6 ">
              <p className="mb-4 font-medium text-base text-[#041B29] h-[200px] sm:h-[140px] lg:h-[190px] xl:h-[140px] 2xl:h-[80px]">
                {review.text}
              </p>
              <div className="flex items-center">
                <img
                  src={review.imgSrc}
                  alt={review.name}
                  className="w-12 lg:w-14 mr-4"
                />
                <div>
                  <p className="font-medium text-xl text-black">
                    {review.name}
                  </p>
                  <p className="font-normal text-sm text-[#808080]">
                    {review.field}
                  </p>
                </div>
              </div>
              <div className="flex mt-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="icon golden-star" />
                ))}
              </div>
              <p className="text-base text-[#041B29]">
                {review.rating}/5 Rating
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="lg:hidden flex justify-center items-center gap-1 my-4">
        <button
          className="hover:text-white text-[#041B29] p-3 rounded-lg bg-transparent hover:bg-gradient-to-r from-[#1b4464] to-[#076dbc] border-2  border-[#999999] hover:border-[#076dbc] mr-5"
          onClick={prevSlide}
        >
          <GrFormPrevious />
        </button>
        <button
          className="hover:text-white text-[#041B29] p-3 rounded-lg bg-transparent hover:bg-gradient-to-r from-[#1b4464] to-[#076dbc] border-2  border-[#999999] hover:border-[#076dbc] mr-5"
          onClick={nextSlide}
        >
          {" "}
          <GrFormNext />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
