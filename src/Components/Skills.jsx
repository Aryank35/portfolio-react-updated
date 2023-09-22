import React from 'react'
import Html from "./images/skills/html.png"
import C from "./images/skills/c.png"
import Css from "./images/skills/css.png"
import Git from "./images/skills/git.svg"
import Github from "./images/skills/github.png"
import Java from "./images/skills/java.svg"
import Javascript from "./images/skills/javascript.png"
import Mongodb from "./images/skills/mongodb.svg"
import Mysql from './images/skills/mysql.svg'
import Python from './images/skills/python.svg'
import Reactimg from './images/skills/react.svg'
import Tailwindcss from './images/skills/tailwindcss.png'
import Typing from './images/skills/typing.jpg'
import VsCode from './images/skills/vscode.png'

const Skills = () => {
  return (
    <div className='Skills bg-[#1c1c27] h-full w-full'>
        <h1 className='font-bold text-3xl md:text-5xl p-5 text-center text-white'>Skills</h1>
        <div className="flex flex-wrap">
            <div className="frontend-skills md:w-[45%] my-8 pb-8 md:h-[300px] h-full mx-[20px] md:mx-auto w-full rounded-xl p-3 border-purple-600 border-2">
                <h1 className='md:text-3xl text-xl font-bold text-white text-center pb-4 md:pb-6'>FrontEnd</h1>
                <div className="skill flex flex-wrap gap-3 items-center justify-center space-x-3 h-full w-full pb-6">
                <div className="hover:bg-purple-400 hover:cursor-pointer html flex justify-center items-center md:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10' src={Html} alt="" />
                    <p>HTML</p>
                </div>
                <div className="hover:bg-purple-400 hover:cursor-pointer css flex justify-center items-center md:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-8 h-10' src={Css} alt="" />
                    <p>CSS</p>
                </div>
                <div className="hover:bg-purple-400 hover:cursor-pointer tailwindcss flex justify-center items-center md:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-8 h-6 my-2' src={Tailwindcss} alt="" />
                    <p>TailwindCss</p>
                </div>
                <div className="hover:bg-purple-400 hover:cursor-pointer javascript flex justify-center items-center md:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10' src={Javascript} alt="" />
                    <p>JavaScript</p>
                </div>
                <div className="hover:bg-purple-400 hover:cursor-pointer react flex justify-center items-center md:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10' src={Reactimg} alt="" />
                    <p>React js</p>
                </div>
                </div>
            </div>
            <div className="Database md:w-[45%] my-8 pb-8 md:h-[300px]  h-full mx-[20px] md:mx-auto w-full  rounded-xl p-3 border-purple-600 border-2">
            <h1 className='md:text-3xl text-xl font-bold text-white text-center pb-4 md:pb-6'>DataBase</h1>
                <div className="skills flex flex-wrap gap-3 items-center justify-center space-x-3 h-full w-full pb-6">
                <div className="hover:bg-purple-400 hover:cursor-pointer mysql flex justify-center items-center md:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10' src={Mysql} alt="" />
                    <p>MySQL</p>
                </div>
                <div className="hover:bg-purple-400 hover:cursor-pointer mongodb flex justify-center items-center md:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10' src={Mongodb} alt="" />
                    <p>MongoDB</p>
                </div>
                </div>
            </div>
            <div className="languages md:w-[45%] my-8 pb-8 md:h-[300px] h-full mx-[20px] md:mx-auto w-full rounded-xl p-3 border-purple-600 border-2">
            <h1 className='md:text-3xl text-xl font-bold text-white text-center pb-4 md:pb-6'>Languages</h1>
                
                <div className="skills flex flex-wrap gap-3 items-center justify-center space-x-3 h-full w-full pb-6">
                <div className="hover:bg-purple-400 hover:cursor-pointer c flex justify-center items-center md:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10 ' src={C} alt="" />
                    <p>C</p>
                </div>
                <div className="hover:bg-purple-400 hover:cursor-pointer java flex justify-center items-center md:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10 ' src={Java} alt="" />
                    <p>Java</p>
                </div>
                <div className="hover:bg-purple-400 hover:cursor-pointer python flex justify-center items-center md:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10 ' src={Python} alt="" />
                    <p>Python</p>
                </div>
                <div className="hover:bg-purple-400 hover:cursor-pointer javascr flex justify-center items-center md:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xlpt">
                    <img className='w-10 ' src={Javascript} alt="" />
                    <p>JavaScript</p>
                </div>
                </div>
            </div>
            <div className="version-control md:w-[45%] my-8 pb-8 md:h-[300px] h-full mx-[20px] md:mx-auto w-full rounded-xl p-3 border-purple-600 border-2">
            <h1 className='md:text-3xl text-xl font-bold text-white text-center pb-4 md:pb-6'>Version Control</h1>
                
                <div className="skills flex flex-wrap gap-3 items-center justify-center space-x-3 h-full w-full pb-6">
                <div className="hover:bg-purple-400 hover:cursor-pointer git flex justify-center items-center md:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10 ' src={Git} alt="" />
                    <p>Git</p>
                </div>
                <div className="hover:bg-purple-400 hover:cursor-pointer github flex justify-center items-center md:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10 ' src={Github} alt="" />
                    <p>Github</p>
                </div>
                <div className="hover:bg-purple-400 hover:cursor-pointer vscode flex justify-center items-center md:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10 ' src={VsCode} alt="" />
                    <p>VsCode</p>
                </div>
                </div>
            </div>
            <div className="others md:w-[45%] my-8 pb-8 md:h-[300px] h-full mx-[20px] md:mx-auto w-full rounded-xl p-3 border-purple-600 border-2">
            <h1 className='md:text-3xl text-xl font-bold text-white text-center pb-4 md:pb-6'>Others</h1>
                
                <div className="skills flex flex-wrap gap-3 items-center justify-center space-x-3 h-full w-full pb-6">
                <div className="hover:bg-purple-400 hover:cursor-pointer typing flex justify-center items-center md:w-[50%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10 ' src={Typing} alt="" />
                    <p>Typing speed</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills