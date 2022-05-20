import React, { useState } from "react";

import Present from "./Present";
import About from "./About";
import Portfolio from "./Portfolio";

const Home = () => {
  return (
    <>
      <Present />
      <About />
      <Portfolio />
    </>
  );
};

export default Home;
