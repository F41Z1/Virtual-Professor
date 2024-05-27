import { useState } from "react";

import Hero from "../src/components/Hero/Hero.jsx";
import Rating from "../src/components/rating/Rating.jsx";
import HowWorks from "../src/components/how-works/HowWorks.jsx";
import Features from "../src/components/Features/Features.jsx";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Rating />
      <HowWorks />
      <Features />
    </>
  );
}

export default App;
