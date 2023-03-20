import React from 'react'

const About = () => {
  return (
    <div id='about' className='h-screen  md:w-full bg-gradient-to-b from-gray-800 to-black py-6'>
      <div className='md:items-start md:w-full items-start h-full pt-0 md:pt-16 flex flex-col gap-24 md:px-40 px-12'>
       <h1 className='text-white text-4xl items-start border-b-4 border-gray-500 font-semibold'> MISSION & VISION </h1>
       <p className='text-base md:text-xl font-semibold text-white '>
       Our mission is to help enterprises accelerate adoption of new technologies,
        untangle complex issues that always emerge during digital evolution, 
        and orchestrate ongoing innovation. Whether it is a consumer-oriented app or a transformative 
        enterprise-class solution, the company leads the process from ideation and concept to delivery, 
       and provides ongoing support through its IS360 framework.
       </p>
      </div>
    </div>

  )
}

export default About