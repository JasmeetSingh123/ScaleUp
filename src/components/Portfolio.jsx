import React from "react";


import img1 from "../assets/portfolio/img1.jpg"
import img2 from "../assets/portfolio/img2.jpg"
import img3 from "../assets/portfolio/img3.jpg"
import img4 from "../assets/portfolio/img4.jpg"
import itCon from "../assets/it-consulting.jpeg"
import outsource from "../assets/out.jpeg"
import webdev from "../assets/web.png"

const Portfolio = () => {
  const exp =[
    
    {
      id:1,
      pict: itCon,
      title:"We offer comprehensive tech expertise and enterprise IT support. Our software development services include strategy consulting, CX design, engineering, and lifecycle management of custom products, as well as system integration",
      code: "code",
      demo: "demo"
    },
    {
      id:2,
      pict: outsource,
      title:"custom software development outsourced product development verification and validation application development and maintenance",
      code: "code",
      demo: "demo"
    },
    {
      id:3,
      pict: webdev,
      title:"web development services across multiple platforms integrating complex features and functionality into your websites. We take a client and or user-based approach to developing websites.",
      code: "code",
      demo: "demo"
    },
    // {
    //   id:4,
    //   pict: img4,
    //   code: "code",
    //   demo: "demo"
    // },
    // {
    //   id:5, 
    //   pict: img2,
    //   code: "code",
    //   demo: "demo"
    // },
    // {
    //   id:6,
    //   pict: img1,
    //   code: "code",
    //   demo: "demo"
    // },
  ]

  return (
    <div id="portfolio" className="h-full w-full bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="flex  flex-col gap-5 py-16 items-center ">
        <div className="flex flex-col items-start  w-3/4 gap-4 ">
          <h1 className="text-white  text-4xl border-b-4 font-semibold border-gray-500">
            Services
          </h1>
          <p className="text-gray-500">Check out some of services right here</p>
        </div>

        <div className="grid  md:grid-cols-3 sm:grid-cols-2 items-center gap-10 w-3/4 ">
          {exp.map((portfollio)=>(
                <div key={portfollio.id} className="shadow-md shadow-gray-500 rounded-lg">
                <img src={portfollio.pict} alt="Tree image" className="rounded-lg hover:scale-105 duration-200" />
                <div className="flex items-center justify-around mt-10">
                  {/* <button className=" hover:scale-x-110 text-gray-400 hover:text-white duration-200"> Demo </button>
                  <button className=" hover:scale-x-110 text-gray-400 hover:text-white duration-200"> Code </button> */}
                  <p> {portfollio.title}</p>
                </div>
              </div> 
          ))}
    
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
