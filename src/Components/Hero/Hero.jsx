import React from 'react'
import Typewriter from 'typewriter-effect';
const Hero = () => {
  return (
    <>
      <div id='hero' className='bg-[#040015] pb-8  h-full xl:h-screen flex pt-[65px] flex-col-reverse md:flex-row'>
        <div className='left-div flex flex-col justify-center px-3 m-auto md:w-[50%] space-y-4' id='left'>
          <h1 className='text-white text-2xl md:text-5xl font-bold'>Hi,I am</h1>
          <h1 className='text-white text-2xl md:text-5xl font-bold'>Aryan Kumar Mohapatra</h1>
          <p className='text-white text-xl md:text-3xl font-bold flex'>I am a <span className='text-purple-600 ml-4'><Typewriter
            options={{
              strings: ['Software Developer', 'FrontEnd Developer'],
              autoStart: true,
              loop: true,
            }}
          /></span></p>
          <p className='text-gray-400 text-lg md:text-xl'>Passionate Software Developer with a knack for creating elegant solutions and pushing the boundaries of technology. Skilled in Java, JavaScript, MySQL, HTML, CSS, Tailwind CSS and React. I thrive in dynamic environments where I can apply my creativity and problem-solving abilities. </p>
          <a href="https://drive.google.com/file/d/153lhRJrwCzIRkySVHtDpqEXS78heuQf8/view?usp=sharing" target="_blank"><button className='bg-purple-500 mt-6 md:px-8 md:py-4 rounded-2xl  md:text-2xl p-4 m-auto text-xl  text-white  font-bold hover:bg-purple-300 hover:text-black hover:transition-all hover:ease-in-out hover:duration-[0.7s] hover:delay-75 '> Check Resume</button></a>
        </div>
        <div className='right-div flex items-center m-auto'>
          <img src="./heroImg.jpg" alt="Hero image" className='sm:h-[500px] h-[300px] pb-6 md:pl-8' />
        </div>
      </div>
    </>
  )
}


export default Hero