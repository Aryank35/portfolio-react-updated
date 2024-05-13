import React from 'react'
const Project = () => {
  return (
    <div id='project' className='bg-[#1b1c2b] h-full w-full py-6'>
        <h1 className='font-bold text-3xl md:text-5xl text-white text-center '>Projects</h1>
        <p className='text-center py-4 text-xl font-semibold text-white'>"Discover My Web Development Showcase</p>
        <p className='text-center pb-5 text-xl font-semibold text-gray-400'>Explore my web development projects crafted with HTML, Tailwind CSS, CSS, JavaScript, and React.js."</p>
    
            <div className="project-box p-4 h-full w-full flex flex-col space-y-11 md:space-y-0 md:flex-row mx-auto pb-11">
            <div className="project-box-2 rounded-xl py-2 h-fit md:h-[650px] md:w-[30%] flex flex-col flex-wrap mx-auto border-2">
                    <h1 className='text-center font-bold text-2xl text-white py-3'>Utsah (GITA Annual fest 2024)</h1>
                    <div className="image">
                        <img src="./utsah.jpg" alt="image-project2" className='w-[80%] mx-auto py-3 rounded-lg' />
                    </div>
                    <a href="https://gitafest.fun/" target="_blank" className='mx-auto'><button className='px-4 py-2 border-1 rounded-xl text-white font-semibold flex justify-center bg-slate-600 '>gitafest.fun</button></a>
                    <p className='text-gray-400 font-semibold py-2 px-5 text-center'><span className='font-bold text-xl block text-left text-white'>Desc:</span>
                    "A web app, utilizing React.js and TailwindCSS, streamlined festival details and participant registration through Google Forms, drawing 1692 unique users and enhancing the registration experience."
                    </p>
                    <p className='text-gray-400 font-semibold py-2 px-5'><span className='font-bold text-xl block text-left text-white'>Technology used:</span>
                    <ul>
                        <li>React js</li>
                        <li>Javascript</li>
                        <li>Tailwind css</li>
                        <li>Google form</li>
                        <li>Google sheets</li>
                        
                    </ul>
                    </p>
                    
                </div>
                <div className="project-box-3 rounded-xl py-2 h-fit md:h-[650px] md:w-[30%] flex flex-col mx-auto border-2">
                    <h1 className='text-center font-bold text-2xl text-white py-3'>Mohapatra-Estate</h1>
                    <div className="image">
                        <img src="./estate.jpeg" alt="image-project3" className='w-[80%] mx-auto py-3' />
                    </div>
                    <a href="https://mohapatra-estate.vercel.app/" target="_blank" className='mx-auto'><button className='px-4 py-2 border-1 rounded-xl text-white font-semibold flex justify-center bg-slate-600 '>project link</button></a>
                    <p className='text-gray-400 font-semibold py-2 px-5 text-center'><span className='font-bold text-xl block text-left text-white'>Desc:</span>
                    The platform showcases property listings, search features, and contact forms. Upcoming enhancements include dynamic functionalities like property filtering and sorting for improved user interaction.
                    </p>
                    <p className='text-gray-400 font-semibold py-2 px-5'><span className='font-bold text-xl block text-left text-white'>Technology used:</span>
                    <ul>
                    <li>React js</li>
                        <li>Javascript</li>
                        <li>Tailwind css</li>
                    </ul>
                    </p>                    
                    
                </div>
                <div className="project-box-1 rounded-xl py-2 h-fit md:h-[650px] md:w-[30%] flex flex-col mx-auto border-2">
                    <h1 className='text-center font-bold text-2xl text-white py-3'>Picnic-Management-System</h1>
                    <div className="image">
                        <img src="./picnic.jpeg" alt="image-project1" className='w-[80%] mx-auto py-3' />
                    </div>
                    <a href="https://main--steady-swan-1fbb33.netlify.app/" target="_blank" className='mx-auto'><button className='px-4 py-2 border-1 rounded-xl text-white font-semibold flex justify-center bg-slate-600 '>project link</button></a>
                    <p className='text-gray-400 font-semibold py-2 px-5 text-center'><span className='font-bold text-xl block text-left text-white'>Desc:</span>
                    PicnicPro, a web app crafted with HTML, CSS, and JavaScript, simplifies college picnic planning. Bid farewell to chaos and embrace seamless picnic experiences. Join us to kickstart unforgettable picnics today! 🌞🌲🎉
                    </p>
                    <p className='text-gray-400 font-semibold py-2 px-5'><span className='font-bold text-xl block text-left text-white'>Technology used:</span>
                    <ul>
                        <li>HTML</li>
                        <li>Tailwind css</li>
                        <li>Javascript</li>
                        
                    </ul>
                    </p>
                    
                </div>
                
                
            </div>
        
    </div>
  )
}

export default Project