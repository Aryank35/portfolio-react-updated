import React from 'react'
import { Link } from 'react-scroll'
const Navbar = () => {
  return (
    <nav className='Navbar md:bg-[#040015] pb-4 flex pt-8 items-center justify-between fixed w-[100%] h-[60px] z-[100]'>
        <div className='flex space-x-1 ml-6 mb-4'>
        <a href="#">
            <img src="./logo.jpg" alt="linkedin icon" className='h-[40px]  bg-center rounded-full' />
        </a>
        <h1 className='text-2xl font-bold text-white flex text-center'>Portfolio</h1>
        </div>
        <div className=' hidden md:flex mb-4 '>
          <ul className='flex justify-center text-xl space-x-10 font-bold text-white'>
            <li><a className='hover:text-purple-400' href="#hero">About</a></li>
            <li><a className='hover:text-purple-400' href="#skills">Skills</a></li>
            {/* <li><a className='hover:text-purple-400' href="#">Experience</a></li> */}
            <li><a className='hover:text-purple-400' href="#project">Project</a></li>
            <li><a className='hover:text-purple-400' href="#education">Education</a></li>
          </ul>
        </div>
        <div className='md:flex hidden'>
        <a href="https://github.com/Aryank35" target='_blank' className='mr-6 px-2 flex justify-center font-bold border-purple-200 border-[2px] rounded-2xl text-purple-400 hover:bg-purple-400 hover:text-black hover:transition-all hover:ease-in-out hover:duration-[0.7s] hover:delay-75 mb-4'><button className='p-2'>Github profile</button></a>
        </div>
        <div className=" flex md:hidden">
          <a href="#">
            <img src="./menu.png" alt="Menu Icon" className='h-[40px] mb-8 mr-3' />
          </a>
        </div>
    </nav>
  )
}

export default Navbar