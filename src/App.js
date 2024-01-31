import React from "react";
import Topbar from "./components/Topbar";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Projects from "./components/Projects";
import CodingProfiles from "./components/CodingProfiles"; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
   
  return (
    <div className="flex flex-col gap-20 static bg-black overflow-y-scroll no-scrollbar">
       <Topbar />
       <LandingPage  />
        <About />
        <Projects  />
        <CodingProfiles />
        <Contact />
        <Footer />
    </div>
  )
}

export default App;