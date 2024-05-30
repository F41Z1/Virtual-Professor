import React from "react";
import Activity from "../../assets/images/Activity.png";
import checkbadge from "../../assets/images/check-badge.png";
import eyeinvisible from "../../assets/images/eye-invisible.png";
import Group from "../../assets/images/Group.png";
import Paper from "../../assets/images/Paper.png";
import TickSquare from "../../assets/images/Tick-Square.png";

const features = [
  {
    title: "Instant Answers",
    description:
      "Get quick and accurate responses right when you need them, making learning and problem-solving easier than ever before.",
    img: TickSquare,
  },
  {
    title: "Completely Invisible",
    description:
      "We ensure a user-friendly experience while maintaining absolute confidentiality. Our technology is invisible, leaving no trace.",
    img: eyeinvisible,
  },
  {
    title: "Detailed Explanations",
    description:
      "Instantly get in-depth explanations for a more thorough understanding, perfect for advocates and enthusiasts of complex concepts.",
    img: Activity,
  },
  {
    title: "Advanced AI Technology",
    description:
      "Our advanced AI technology, integrated into Diverse solutions, is designed to make education more effective and efficient.",
    img: Group,
  },
  {
    title: "Guaranteed Results",
    description:
      "Instead of spending countless hours searching for a solution, Virtual Professor is right at your fingertips, available 24/7.",
    img: checkbadge,
  },
  {
    title: "Highly Accurate",
    description:
      "Powered by state-of-the-art AI systems, we provide precise and accurate responses, thus fostering a seamless and accurate learning experience.",
    img: Paper,
  },
];

const Features = () => {
  return (
    <div
      id="Features"
      className="features-card-bg text-white lg:pt-12 pt-5 rounded-lg lg:rounded-none  "
    >
      <div className=" lg:w-[80%] mx-auto">
        <div className="w-[90%] lg:w-[100%] mx-auto">
          <h2 className="font-bold text-center text-white lg:text-[40px]  text-[32px] ">
            All The Features You've Been Looking For
          </h2>
          <p className="text-base text-[#D4D4D4] font-normal text-center lg:py-6 py-3 lg:mb-10 mb-4 ">
            Access all the features you've wanted with our easy-to-use,
            invisible technology, powered by the{" "}
            <br className="hidden lg:block" /> latest AI advancements. Virtual
            Professor offers you peace of mind, ensuring you're never alone on{" "}
            <br className="hidden lg:block" /> your educational journey.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-x-14 lg:gap-x-8    rounded-t-lg bg-white p-8 lg:p-8   xl:p-14">
          {features.map((feature, index) => (
            <div
              key={index}
              //   className="p-6 lg:m-2 m-0 mt-[1px]  features-card-bg lg:rounded-lg rounded-0  shadow-lg flex gap-0 lg:gap-3"

              className={`p-2 lg:p-6  lg:m-2 m-0 mt-[1px] features-card-bg lg:rounded-lg rounded-0  shadow-lg flex gap-0 lg:gap-3 ${
                index === 0 ? "rounded-t-lg" : ""
              } ${index === features.length - 1 ? "rounded-b-lg" : ""}`}
            >
              <div className="flex items-start justify-center gap-4   ">
                <img
                  className="lg:h-8 lg:w-16 h-[25px] sm:h-[30px] w-[50px]  sm:w-[30px]  mt-1 lg:mt-0  "
                  src={feature.img}
                  alt=""
                />
                <div>
                  <h3 className="xl:text-2xl text-[22px] lg:text-[21px]  font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-normal text-white">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
