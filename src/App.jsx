import { useState } from "react";

import Hero from "../src/components/Hero/Hero.jsx";
import Rating from "../src/components/rating/Rating.jsx";
import HowWorks from "../src/components/how-works/HowWorks.jsx";
import Features from "../src/components/Features/Features.jsx";
import Plan from "../src/components/Plan/Plan.jsx";
import FAQs from "../src/components/FAQs/FAQs.jsx";
import Reviews from "../src/components/Reviews/Reviews.jsx";
import Footer from "../src/components/Footer/Footer.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Hero />
      <Rating />
      <HowWorks />
      <Features />
      <Plan />
      <FAQs />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
