import React from 'react';
import Button from '../components/button';
import { useNavigate } from 'react-router-dom';

export default function Home(){

  const navigate = useNavigate();

  const handleClick = (ButtonName) => {
    console.log(`${ButtonName} clicked!`);
    navigate(`/${ButtonName}`);
  };

  return (
     <div>
        <div className='flex items-center justify-center py-4'>
        <h1 className='text-3xl'>Hii,I am Rakshit Benjwal</h1>
        </div>
        <div className='flex items-center justify-center py-4'>
           <h1 className='text-3xl'>
               Sophomore at Graphic Era Hill Unversity
           </h1>
        </div>
      <div className='flex flex-row'>
      <Button onClick={() => handleClick("about")} label="About" />
      <Button onClick={() => handleClick("technical skills")} label="Technical Skills" />
      <Button onClick={() => handleClick("projects")} label="Projects" />
      <Button onClick={() => handleClick("resume")} label="Resume" />
      <Button onClick={() => handleClick("profile")} label="Profile" />
        </div>
      </div>
  );

};
