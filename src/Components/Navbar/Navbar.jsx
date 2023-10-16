import React from 'react'
// import { Link } from 'react-scroll'
import "./style.css"
import "./script.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className='Navbar bg-[#040015] py-2 flex  items-center justify-between fixed w-[100%] h-[60px] -top-2'>
        <div className='flex  my-auto ml-4 sm:ml-6 pt-2'>
        <a href="#" className='flex space-x-1 items-center'>
            <img src="./logo.jpg" alt="linkedin icon" className='sm:h-[40px] h-[35px]  bg-center rounded-full' />
            <h1 className='sm:text-2xl text-xl font-bold text-white flex text-center'>Portfolio</h1>
        </a>
        
        </div>
        <div className=' hidden sm:flex mb-4 '>
          <ul className='flex justify-center sm:text-lg sm:space-x-2 sm:font-semibold md:text-xl md:space-x-10 md:font-bold text-white'>
            <li><a className='hover:text-purple-400' href="#hero">About</a></li>
            <li><a className='hover:text-purple-400' href="#skills">Skills</a></li>
            <li><a className='hover:text-purple-400' href="#project">Project</a></li>
            <li><a className='hover:text-purple-400' href="#education">Education</a></li>
          </ul>
        </div>
        <div className="Mobile-Menu hidden transition-all delay-500 ease-out" id='MobMenu'>
          <ul className='nav-menu fixed -right-[100%]  active top-0 flex flex-col bg-[#fff] w-[40%]  rounded-[10px] space-y-6  delay-[0.3s] shadow-sm shadow-blue-300 px-8 py-[120px]  items-center text-lg font-semibold h-screen'>
          <li><a className='hover:text-purple-400 active:underline py-1' href="#hero">About</a></li>
            <li><a className='hover:text-purple-400 active:underline py-1' href="#skills">Skills</a></li>
            <li><a className='hover:text-purple-400 active:underline py-1' href="#project">Project</a></li>
            <li><a className='hover:text-purple-400 active:underline py-1' href="#education">Education</a></li>
            <div className=''>
              <a href="https://github.com/Aryank35" target='_blank' className='mx-auto px-2 flex justify-center font-bold border-purple-200 border-[2px] rounded-2xl text-purple-400 hover:bg-purple-400 hover:text-black hover:transition-all hover:ease-in-out hover:duration-[0.7s] hover:delay-75 mb-4'><button className='px-1 py-2 text-lg text-center'>Github</button></a>
            </div>
          </ul>
          <div className='font-bold text-3xl relative top-1 left-[25%]  text-red-600 ' id='cancel'><FontAwesomeIcon icon={faXmark} /></div>
        </div>
        <div className='sm:flex hidden'>
        <a href="https://github.com/Aryank35" target='_blank' className='mr-6 px-2 flex justify-center font-bold border-purple-200 border-[2px] rounded-2xl text-purple-400 hover:bg-purple-400 hover:text-black hover:transition-all hover:ease-in-out hover:duration-[0.7s] hover:delay-75 mb-4'><button className='p-2'>Github profile</button></a>
        </div>
        <div className=" flex sm:hidden items-center my-auto pt-[10px]" id='MenuBar'>
            <img src="./menu.png" alt="Menu Icon" className='h-[30px] mb-8 mr-4 transition-all delay-[0.3s] ease-in-out cursor-pointer' />
        </div>
    </nav>
  )
}

export default Navbar