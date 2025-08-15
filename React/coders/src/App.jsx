import React from "react";
import Hero from "./components/Hero";
import Middle from "./components/Middle";
import Reels from "./components/Reels";
import About from "./components/About";

import Contribute from "./components/Contribute";

const App = () => {
  
  const path = window.location.pathname;


  if (path === "/reels") {
    return <Reels />;
  }

  if (path === "/about") {
    return <About />;
  }

   if (path === "/contribute") {
    return <Contribute />;
  }

 
  return (
    <>
      <Hero />
      <Middle />
    </>
  );
};

export default App;
