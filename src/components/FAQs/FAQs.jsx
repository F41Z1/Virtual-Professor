import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const faqs = [
  {
    id: 1,
    question: "How does this work?",
    answer:
      "Virtual Professor leverages cutting-edge AI technology to deliver highly accurate answers to homework, quiz, and comprehension questions. Simply input the question, submit it in your dashboard, and click the button for your question to get the answer and explanation.",
  },
  {
    id: 2,
    question: "Can I get commission if I share with my friends?",
    answer:
      "Yes, you can get a commission if you share with your friends. Please refer to our referral policy for more details.",
  },
  {
    id: 3,
    question: "What is your refund policy?",
    answer:
      "Our refund policy is simple. If you're not satisfied with our service, you can request a refund within 30 days of purchase. Please contact our support for assistance.",
  },
  {
    id: 4,
    question: "Can anyone see that I'm using VP?",
    answer:
      "No, your usage of Virtual Professor is completely private and secure.",
  },
  {
    id: 5,
    question: "Can I cancel my membership anytime?",
    answer:
      "Yes, you can cancel your membership at any time through your account settings.",
  },
  {
    id: 6,
    question: "What if I have more questions?",
    answer:
      "If you have more questions, feel free to contact our support team or visit our help center.",
  },
];

const Faq = () => {
  const [activeIndexFirstGrid, setActiveIndexFirstGrid] = useState(0);
  const [activeIndexSecondGrid, setActiveIndexSecondGrid] = useState(null);

  const toggleFaqFirstGrid = (index) => {
    if (activeIndexFirstGrid === index) {
      setActiveIndexFirstGrid(null);
    } else {
      setActiveIndexFirstGrid(index);
      setActiveIndexSecondGrid(null); // Collapse FAQs in the second grid when expanding FAQs in the first grid
    }
  };

  const toggleFaqSecondGrid = (index) => {
    if (activeIndexSecondGrid === index) {
      setActiveIndexSecondGrid(null);
    } else {
      setActiveIndexSecondGrid(index);
      setActiveIndexFirstGrid(null); // Collapse FAQs in the first grid when expanding FAQs in the second grid
    }
  };

  // Slicing the FAQs into two arrays
  const firstHalf = faqs.slice(0, 3);
  const secondHalf = faqs.slice(3, 6);

  return (
    <div id="FAQs" className="w-[90%] lg:w-[80%] mx-auto lg:p-8 px-0">
      <h2 className="lg:text-[40px] text-[32px] font-bold text-center mb-1">
        Frequently Asked Questions
      </h2>
      <p className="text-[#646464] font-normal text-base text-center mb-6">
        Have questions? We've got answers. Explore our FAQ section to find
        solutions to <br className="hidden lg:block" /> commonly asked questions
        and get the information you need.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-4 gap-x-0 faqs-bg">
        <div>
          {/* First half of the FAQs */}
          {firstHalf.map((faq, index) => (
            <div key={faq.id} className="mb-3 border rounded-lg bg-white">
              <button
                onClick={() => toggleFaqFirstGrid(index)}
                className="w-full text-left p-3 lg:p-4 rounded-lg focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-xl">{faq.question}</span>
                  <span>
                    {activeIndexFirstGrid === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
              </button>
              {activeIndexFirstGrid === index && (
                <div className="px-3 lg:px-4 pb-1 lg:pb-3 text-[#6E7072]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div>
          {/* Second half of the FAQs */}
          {secondHalf.map((faq, index) => (
            <div key={faq.id} className="mb-3 border rounded-lg bg-white">
              <button
                onClick={() => toggleFaqSecondGrid(index)} // Adjust index to match original FAQ index
                className="w-full text-left p-3 lg:p-4 rounded-lg focus:outline-none"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-xl">{faq.question}</span>
                  <span>
                    {activeIndexSecondGrid === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
              </button>
              {activeIndexSecondGrid === index && (
                <div className="px-3 lg:px-4 pb-1 lg:pb-3 text-[#6E7072]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
