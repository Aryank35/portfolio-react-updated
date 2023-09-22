import React from 'react'
import Project1 from "./images/project.png"
const Project = () => {
  return (
    <div className='bg-[#1b1c2b] h-full w-full'>
        <h1 className='font-bold text-3xl md:text-5xl text-white text-center py-4'>Project</h1>
        <p className='text-center py-4 text-xl font-semibold text-white'>"Discover My Web Development Showcase</p>
        <p className='text-center pb-5 text-xl font-semibold text-gray-400'>Explore my web development projects crafted with HTML, Tailwind CSS, CSS, JavaScript, and React.js."</p>
        <div>
            <div className="project-box p-4 h-full w-full flex flex-col space-y-11 md:space-y-0 md:flex-row mx-auto">
                
                <div className="project-box-1 h-fit md:w-[30%] flex flex-col mx-auto border-2">
                    <h1 className='text-center font-bold text-2xl text-white py-3'>Project 1</h1>
                    <div className="image">
                        <img src={Project1} alt="image-project1" className='w-[80%] mx-auto py-3' />
                    </div>
                    <a href="#" className='mx-auto'><button className='px-4 py-2 border-1 rounded-xl text-white font-semibold flex justify-center bg-slate-600 '>project link</button></a>
                    <p className='text-gray-400 font-semibold py-2 px-5 text-center'><span className='font-bold text-xl block text-left text-white'>Desc:</span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus exercitationem tempore laborum cupiditate temporibus? Numquam nemo consequatur recusandae possimus aliquam!
                    </p>
                    <p className='text-gray-400 font-semibold py-2 px-5'><span className='font-bold text-xl block text-left text-white'>Technology used:</span>
                    <ul>
                        <li>HTML</li>
                        <li>Tailwind css</li>
                        <li>Javascript</li>
                        <li>React</li>
                    </ul>
                    </p>
                    
                </div>
                <div className="project-box-2 h-fit md:w-[30%] flex flex-col flex-wrap mx-auto border-2">
                    <h1 className='text-center font-bold text-2xl text-white py-3'>Project 2</h1>
                    <div className="image">
                        <img src={Project1} alt="image-project2" className='w-[80%] mx-auto py-3' />
                    </div>
                    <a href="#" className='mx-auto'><button className='px-4 py-2 border-1 rounded-xl text-white font-semibold flex justify-center bg-slate-600 '>project link</button></a>
                    <p className='text-gray-400 font-semibold py-2 px-5 text-center'><span className='font-bold text-xl block text-left text-white'>Desc:</span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus exercitationem tempore laborum cupiditate temporibus? Numquam nemo consequatur recusandae possimus aliquam!
                    </p>
                    <p className='text-gray-400 font-semibold py-2 px-5'><span className='font-bold text-xl block text-left text-white'>Technology used:</span>
                    <ul>
                        <li>HTML</li>
                        <li>Tailwind css</li>
                        <li>Javascript</li>
                        <li>React</li>
                    </ul>
                    </p>
                    
                </div>
                <div className="project-box-3 h-fit md:w-[30%] flex flex-col mx-auto border-2">
                    <h1 className='text-center font-bold text-2xl text-white py-3'>Project 3</h1>
                    <div className="image">
                        <img src={Project1} alt="image-project3" className='w-[80%] mx-auto py-3' />
                    </div>
                    <a href="#" className='mx-auto'><button className='px-4 py-2 border-1 rounded-xl text-white font-semibold flex justify-center bg-slate-600 '>project link</button></a>
                    <p className='text-gray-400 font-semibold py-2 px-5 text-center'><span className='font-bold text-xl block text-left text-white'>Desc:</span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus exercitationem tempore laborum cupiditate temporibus? Numquam nemo consequatur recusandae possimus aliquam!
                    </p>
                    <p className='text-gray-400 font-semibold py-2 px-5'><span className='font-bold text-xl block text-left text-white'>Technology used:</span>
                    <ul>
                        <li>HTML</li>
                        <li>Tailwind css</li>
                        <li>Javascript</li>
                        <li>React</li>
                    </ul>
                    </p>                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project