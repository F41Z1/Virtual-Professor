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
    <div className="features-card-bg text-white pt-12 ">
      <div className=" w-[90%] lg:w-[80%] mx-auto">
        <h2 className="font-bold text-center text-white text-[40px]">
          All The Features You've Been Looking For
        </h2>
        <p className="text-base text-[#D4D4D4] font-normal text-center py-6 mb-10 ">
          Access all the features you've wanted with our easy-to-use, invisible
          technology, powered by the <br /> latest AI advancements. Virtual
          Professor offers you peace of mind, ensuring you're never alone on{" "}
          <br /> your educational journey.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14  rounded-t-lg bg-white p-10 lg:p-14">
          {features.map((feature, index) => (
            <div
              key={index}
              //   className="p-6 lg:m-2 m-0 mt-[1px]  features-card-bg lg:rounded-lg rounded-0  shadow-lg flex gap-0 lg:gap-3"

              className={`p-2 lg:p-6 lg:m-2 m-0 mt-[1px] features-card-bg lg:rounded-lg rounded-0  shadow-lg flex gap-0 lg:gap-3 ${
                index === 0 ? "rounded-t-lg" : ""
              } ${index === features.length - 1 ? "rounded-b-lg" : ""}`}
            >
              <div className="flex items-start justify-center   ">
                <img className="h-8 w-16  " src={feature.img} alt="" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm font-normal text-white">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;