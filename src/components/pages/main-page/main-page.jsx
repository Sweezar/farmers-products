import React from "react";
import Advantages from "/src/components/blocks/advantages/advantages";
import About from "/src/components/blocks/about/about";

function MainPage({ advantages }) {
  return (
    <>
      <About />
      <Advantages advantages={advantages} />
    </>
  );
}

export default MainPage;
