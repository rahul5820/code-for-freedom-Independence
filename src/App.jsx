import React from "react";
import Hero from "./components/Hero";
import Middle from "./components/Middle";
import Reels from "./components/Reels";
import About from "./components/About";
import Contribute from "./components/Contribute";
import { Routes,Route, } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  
  // const path = window.location.pathname;


  // if (path === "/reels") {
  //   return <Reels />;
  // }

  // if (path === "/about") {
  //   return <About />;
  // }

  //  if (path === "/contribute") {
  //   return <Contribute />;
  // }
  
 
  return (
    <>



     <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/reel' element={<About/>}/>
      <Route path='/contribute' element ={<Contribute/>}/>
      <Route path='/reels' element ={<Reels/>}/>

    </Routes>


 



      <Hero />
    
    </>
  );
};

export default App;
