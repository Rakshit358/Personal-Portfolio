import { Link } from 'react-router-dom';    
import React, { useRef } from 'react';
export default function Topbar(){
    const handleClick = (data) => {  
        console.log(data.target.id);
        switch(data.target.id) {
          case "1":
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
            break;
          case "2":
            document.getElementById('codingprofiles').scrollIntoView({ behavior: 'smooth' })
            break;
          case "3":
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            break;
          case "4":
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
            break;
        }
      }
    
    return ( 
        <div className="bg-black h-20 w-full fixed">
          <h1 className="pt-6 text-white">
             Rakshit Benjwal's Profile
          </h1>
          <div className="flex flex-row-reverse gap-10 pr-6">
         <Link id="1" className="hover:scale-110 duration-300 ease-in-out text-white"  onClick={handleClick}>About</Link>
         <Link id="2" className="hover:scale-110 duration-300 ease-in-out text-white"  onClick={handleClick}>Coding Profiles</Link>
         <Link id="3"  className="hover:scale-110 duration-300 ease-in-out text-white"  onClick={handleClick}>Contact Me</Link>
         <Link id="4" className="hover:scale-110 duration-300 ease-in-out text-white" onClick={handleClick}>Projects</Link>
          </div>
        </div>
    );
}

