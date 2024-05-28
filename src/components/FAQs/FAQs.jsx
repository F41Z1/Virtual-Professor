import React, { useState } from "react";

const faqs = [
  {
    question: "How does this work?",
    answer:
      "Virtual Professor leverages cutting-edge AI technology to deliver highly accurate answers to homework, quiz, and comprehension questions. Simply input the question, submit it in your dashboard, and click the button for your question to get the answer and explanation.",
  },
  {
    question: "Can I get commission if I share with my friends?",
    answer:
      "Yes, you can get a commission if you share with your friends. Please refer to our referral policy for more details.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "Our refund policy is simple. If you're not satisfied with our service, you can request a refund within 30 days of purchase. Please contact our support for assistance.",
  },
  {
    question: "Can anyone see that I'm using VP?",
    answer:
      "No, your usage of Virtual Professor is completely private and secure.",
  },
  {
    question: "Can I cancel my membership anytime?",
    answer:
      "Yes, you can cancel your membership at any time through your account settings.",
  },
  {
    question: "What if I have more questions?",
    answer:
      "If you have more questions, feel free to contact our support team or visit our help center.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-[90%] lg:w-[80%] mx-auto p-8">
      <h2 className="text-[40px] font-bold text-center mb-1">
        Frequently Asked Questions
      </h2>
      <p className="text-[#646464] font-normal text-base text-center mb-6">
        Have questions? We've got answers. Explore our FAQ section to find
        solutions to <br /> commonly asked questions and get the information you
        need.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 faqs-bg">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-3 border rounded-lg bg-white">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left p-4 rounded-lg focus:outline-none"
            >
              <div className="flex justify-between">
                <span className="font-medium">{faq.question}</span>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
            </button>
            {activeIndex === index && (
              <div className="p-4 rounded-lg">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
