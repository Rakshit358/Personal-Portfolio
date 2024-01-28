// import React from 'react';
// import Button from './components/button';
// import { BrowserRouter, useNavigate } from 'react-router-dom';

// const App = () => {

//   const navigate = useNavigate();

//   const handleClick = (ButtonName) => {
//     console.log(`${ButtonName} clicked!`);
//     navigate(`/${ButtonName}`);
//   };

//   return (
//     <BrowserRouter>
//      <div>
//         <div className='flex items-center justify-center py-4'>
//         <h1 className='text-3xl'>Hii,I am Rakshit Benjwal</h1>
//         </div>
//         <div className='flex items-center justify-center py-4'>
//            <h1 className='text-3xl'>
//                Sophomore at Graphic Era Hill Unversity
//            </h1>
//         </div>
//       <div className='flex flex-row'>
//       <Button onClick={() => handleClick("about")} label="About" />
//       <Button onClick={() => handleClick("technical skills")} label="Technical Skills" />
//       <Button onClick={() => handleClick("projects")} label="Projects" />
//       <Button onClick={() => handleClick("resume")} label="Resume" />
//       <Button onClick={() => handleClick("profile")} label="Profile" />
//         </div>
//       </div>
//       </BrowserRouter>
//   );

// };

// export default App;
import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";
import Resume from "./pages/resume";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume   />} />
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;