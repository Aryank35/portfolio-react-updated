import React from 'react'
const Project = () => {
  return (
    <div className='bg-[#1b1c2b] h-full w-full'>
        <h1 className='font-bold text-3xl md:text-5xl text-white text-center py-4'>Project</h1>
        <p className='text-center py-4 text-xl font-semibold text-white'>"Discover My Web Development Showcase</p>
        <p className='text-center pb-5 text-xl font-semibold text-gray-400'>Explore my web development projects crafted with HTML, Tailwind CSS, CSS, JavaScript, and React.js."</p>
        <div>
            <div className="project-box p-4 h-full w-full flex flex-col space-y-11 md:space-y-0 md:flex-row mx-auto">
                
                <div className="project-box-1 h-fit md:h-[750px] md:w-[30%] flex flex-col mx-auto border-2">
                    <h1 className='text-center font-bold text-2xl text-white py-3'>Picnic-Management-System</h1>
                    <div className="image">
                        <img src="./project.png" alt="image-project1" className='w-[80%] mx-auto py-3' />
                    </div>
                    <a href="https://main--steady-swan-1fbb33.netlify.app/" target="_blank" className='mx-auto'><button className='px-4 py-2 border-1 rounded-xl text-white font-semibold flex justify-center bg-slate-600 '>project link</button></a>
                    <p className='text-gray-400 font-semibold py-2 px-5 text-center'><span className='font-bold text-xl block text-left text-white'>Desc:</span>
                    Welcome to PicnicPro, your one-stop solution for effortless college picnic management! This web application is built with HTML, CSS, and JavaScript to streamline the planning and organization of college picnics. Say goodbye to chaos and hello to smooth picnic experiences. Join us and start planning unforgettable picnics today! 🌞🌲🎉
                    </p>
                    <p className='text-gray-400 font-semibold py-2 px-5'><span className='font-bold text-xl block text-left text-white'>Technology used:</span>
                    <ul>
                        <li>HTML</li>
                        <li>Tailwind css</li>
                        <li>Javascript</li>
                        
                    </ul>
                    </p>
                    
                </div>
                <div className="project-box-2 h-fit md:h-[750px] md:w-[30%] flex flex-col flex-wrap mx-auto border-2">
                    <h1 className='text-center font-bold text-2xl text-white py-3'>My Portfolio</h1>
                    <div className="image">
                        <img src="./project.png" alt="image-project2" className='w-[80%] mx-auto py-3' />
                    </div>
                    <a href="#https://portfolio-react-psi-one.vercel.app/" target="_blank" className='mx-auto'><button className='px-4 py-2 border-1 rounded-xl text-white font-semibold flex justify-center bg-slate-600 '>My Portfolio</button></a>
                    <p className='text-gray-400 font-semibold py-2 px-5 text-center'><span className='font-bold text-xl block text-left text-white'>Desc:</span>
                    "Unveil my portfolio project on GitHub! 🌟 Built with React, JavaScript, and Tailwind CSS, it showcases my skills and projects. Dive into the code and explore my work. Your insights are appreciated as I continue to develop engaging web experiences. 💼🚀"
                    </p>
                    <p className='text-gray-400 font-semibold py-2 px-5'><span className='font-bold text-xl block text-left text-white'>Technology used:</span>
                    <ul>
                        <li>React</li>
                        <li>Javascript</li>
                        <li>Tailwind css</li>
                        
                    </ul>
                    </p>
                    
                </div>
                <div className="project-box-3 h-fit md:h-[750px] md:w-[30%] flex flex-col mx-auto border-2">
                    <h1 className='text-center font-bold text-2xl text-white py-3'>Landing page</h1>
                    <div className="image">
                        <img src="./project.png" alt="image-project3" className='w-[80%] mx-auto py-3' />
                    </div>
                    <a href="https://aryank35.github.io/My-Home-page/" target="_blank" className='mx-auto'><button className='px-4 py-2 border-1 rounded-xl text-white font-semibold flex justify-center bg-slate-600 '>project link</button></a>
                    <p className='text-gray-400 font-semibold py-2 px-5 text-center'><span className='font-bold text-xl block text-left text-white'>Desc:</span>
                    🚀 Explore my GitHub repository to discover my meticulously crafted HTML and CSS UsabilityHub clone. 🌐 This project pays homage to UsabilityHub's design and functionality. Your feedback is invaluable in my journey to hone my web development skills and create engaging, user-friendly web experiences. 🙌
                    </p>
                    <p className='text-gray-400 font-semibold py-2 px-5'><span className='font-bold text-xl block text-left text-white'>Technology used:</span>
                    <ul>
                        <li>HTML</li>
                        <li>css</li> 
                    </ul>
                    </p>                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project