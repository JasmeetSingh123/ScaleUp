import React from "react";
import image from "../assets/image.png";
import { AiOutlineRight } from "react-icons/ai";


const Home = () => {
  return (
    <div id="home" className="h-screen bg-gradient-to-b from-black to-gray-700 flex w-full img items-center justify-between">
      <div className="flex flex-col-reverse md:flex-row md:items-center w-full justify-center ">
        <div className="flex flex-col justify-center gap-4 md:w-[30%] h-[60%] px-16 md:m-0 items-center">
          <h1 className="text-black text-4xl md:text-6xl font-semibold ">
            About ScaleUp
          </h1>
          <p className="text-black text-sm  md:text-base text-start text-md">
          We are a digital transformation consultancy and engineering company 
          that delivers cutting edge solutions for global organisations and technology startups.
           Since 2007 we have been helping companies and established brands reimagine their business 
           through digitalisation.
          </p>

          <a href="#portfolio" className= "group text-white my-4 flex items-center justify-center h-12 w-1/2 md:w-[50%]  rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold gap-2">
            Services
            <AiOutlineRight className="text-white pt-1 text-xl group-hover:rotate-90 duration-300 pl-1" />
          </a>
          
        </div>
        {/* <div className="text-xl items-end mt-0 sm:mt-72 md:mt-0">
          <img src={image} alt="image" className="w-full" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
