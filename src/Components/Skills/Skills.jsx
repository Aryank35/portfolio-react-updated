import React from 'react'


const Skills = () => {
  return (
    <div className='Skills bg-[#1c1c27] h-full w-full'>
        <h1 className='font-bold text-3xl md:text-5xl p-5 text-center text-white'>Skills</h1>
        <div className="flex flex-wrap">
            <div className="frontend-skills md:w-[45%] my-8 pb-8 md:h-fit h-full mx-[20px] md:mx-auto w-full rounded-xl p-3 border-purple-600 border-2">
                <h1 className='md:text-3xl text-xl font-bold text-white text-center pb-4 md:pb-6'>FrontEnd</h1>
                <div className="skill flex flex-wrap gap-3 items-center justify-center space-x-3 h-full w-full pb-6">
                <div className="hover:bg-purple-400 hover:cursor-pointer html flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10' src="./skills/html.png" alt="" />
                    <p>HTML</p>
                </div>
                <div className="hover:bg-purple-400 hover:cursor-pointer css flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-8 h-10' src="./skills/css.png" alt="" />
                    <p>CSS</p>
                </div>
                <div className="hover:bg-purple-400 hover:cursor-pointer tailwindcss flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-8 h-6 my-2' src="./skills/tailwindcss.png" alt="" />
                    <p>TailwindCss</p>
                </div>
                <div className="hover:bg-purple-400 hover:cursor-pointer javascript flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10' src="./skills/javascript.png" alt="" />
                    <p>JavaScript</p>
                </div>
                <div className="hover:bg-purple-400 hover:cursor-pointer react flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10' src="./skills/react.svg" alt="" />
                    <p>React js</p>
                </div>
                </div>
            </div>
            <div className="Database md:w-[45%] my-8 pb-8 md:h-fit  h-full mx-[20px] md:mx-auto w-full  rounded-xl p-3 border-purple-600 border-2">
            <h1 className='md:text-3xl text-xl font-bold text-white text-center pb-4 md:pb-6'>DataBase</h1>
                <div className="skills flex flex-wrap gap-3 items-center justify-center space-x-3 h-full w-full pb-6">
                <div className="hover:bg-purple-400 hover:cursor-pointer mysql flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10' src="./skills/mysql.svg" alt="" />
                    <p>MySQL</p>
                </div>
                <div className="hover:bg-purple-400 hover:cursor-pointer mongodb flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10' src="./skills/mongodb.svg" alt="" />
                    <p>MongoDB</p>
                </div>
                </div>
            </div>
            <div className="languages md:w-[45%] my-8 pb-8 md:h-fit h-full mx-[20px] md:mx-auto w-full rounded-xl p-3 border-purple-600 border-2">
            <h1 className='md:text-3xl text-xl font-bold text-white text-center pb-4 md:pb-6'>Languages</h1>
                
                <div className="skills flex flex-wrap gap-3 items-center justify-center space-x-3 h-full w-full pb-6">
                <div className="hover:bg-purple-400 hover:cursor-pointer c flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10 ' src="./skills/c.png" alt="" />
                    <p>C</p>
                </div>
                <div className="hover:bg-purple-400 hover:cursor-pointer java flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10 ' src="./skills/java.svg" alt="" />
                    <p>Java</p>
                </div>
                <div className="hover:bg-purple-400 hover:cursor-pointer python flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10 ' src="./skills/python.svg" alt="" />
                    <p>Python</p>
                </div>
                <div className="hover:bg-purple-400 hover:cursor-pointer javascr flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xlpt">
                    <img className='w-10 ' src="./skills/javascript.png" alt="" />
                    <p>JavaScript</p>
                </div>
                </div>
            </div>
            <div className="version-control md:w-[45%] my-8 pb-8 md:h-fit h-full mx-[20px] md:mx-auto w-full rounded-xl p-3 border-purple-600 border-2">
            <h1 className='md:text-3xl text-xl font-bold text-white text-center pb-4 md:pb-6'>Version Control</h1>
                
                <div className="skills flex flex-wrap gap-3 items-center justify-center space-x-3 h-full w-full pb-6">
                <div className="hover:bg-purple-400 hover:cursor-pointer git flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10 ' src="./skills/git.svg" alt="" />
                    <p>Git</p>
                </div>
                <div className="hover:bg-purple-400 hover:cursor-pointer github flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10 ' src=",/skills/github.png" alt="" />
                    <p>Github</p>
                </div>
                <div className="hover:bg-purple-400 hover:cursor-pointer vscode flex justify-center items-center md:w-[60%] lg:w-[30%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10 ' src="./skills/vscode.png" alt="" />
                    <p>VsCode</p>
                </div>
                </div>
            </div>
            <div className="others md:w-[45%] my-8 pb-8 md:h-fit h-full mx-[20px] md:mx-auto w-full rounded-xl p-3 border-purple-600 border-2">
            <h1 className='md:text-3xl text-xl font-bold text-white text-center pb-4 md:pb-6'>Others</h1>
                
                <div className="skills flex flex-wrap gap-3 items-center justify-center space-x-3 h-full w-full pb-6">
                <div className="hover:bg-purple-400 hover:cursor-pointer typing flex justify-center items-center md:w-[50%] text-white gap-3 p-3 border-gray-500 border-2 rounded-2xl font-semibold text-sm md:text-xl">
                    <img className='w-10 ' src="./skills/typing.jpg" alt="" />
                    <p>Typing speed</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills