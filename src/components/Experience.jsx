import React from "react";
import cppimg from '../assets/experience/cppimg.svg'
import jsimg from '../assets/experience/jsimg.svg'
import mongodbimg from '../assets/experience/mongodbimg.svg'
import nodeimg from '../assets/experience/nodeimg.svg'
import pythonimg from '../assets/experience/pythonimg.svg'
import accenture from '../assets/accenture.png'
import google from '../assets/google.png'
import tmobile from '../assets/tmobile.png'
import mayo from '../assets/mayo.png'

const Experience = () => {
  const exp = [
    {
      id: 1,
      text: "",
      img: accenture,
      style:"shadow-blue-300"
    },
    {
      id: 2,
      text: "",
      img: google,
      style:"shadow-[#ff781f]"
    },
    {
      id: 3,
      text: "",
      img: tmobile,
      style:"shadow-blue-700"
    },
    {
      id: 4,
      text: "",
      img: mayo,
      style:"shadow-yellow-300"
    },
    // {
    //   id: 5,
    //   text: "Nodejs",
    //   img: nodeimg,
    //   style:"shadow-green-700"
    // },
    // {
    //   id: 6,
    //   text: "Python",
    //   img: pythonimg,
    //   style:"shadow-yellow-500"
    // },
    // {
    //   id: 7,
    //   text: "MongoDb",
    //   img: mongodbimg,
    //   style:"shadow-green-200"
    // },
    // {
    //   id: 8,
    //   text: "C++",
    //   img: cppimg,
    //   style:"shadow-blue-900"
    // },
    
    
  ];

  return (
    <div id="experience" className="h-full w-full bg-gradient-to-b to-black from-gray-800 items-center">
      <div className="flex flex-col py-12 items-center ">
        <div className="flex flex-col gap-6 items-center  pt-12 w-3/4">
          <div className="flex flex-col items-start w-full gap-4">
            <h1 className="text-4xl text-white border-b-4 border-gray-500">
              Clients
            </h1>
            <p className="text-gray-500">
            
              Some of clients we have worked with
            </p>
          </div>

          <div className="grid grid-cols-2 w-4/5 gap-8  sm:grid-cols-3 md:grid-cols-4 items-center ">
            {exp.map((exper) => (
              <div
                key={exper.id}
                className={`shadow-md flex flex-col hover:scale-110 duration-200 items-center  rounded-xl ${exper.style} `} 
              >
                <img src={exper.img} alt="Experience Image" />
                <p className="text-white capitalize ">{exper.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
