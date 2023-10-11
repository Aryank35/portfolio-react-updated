import React from 'react'

const Education = () => {
  return (
    
    <div className='Education bg-purple-950 w-full items-center py-4 mx-auto  md:px-[20%] 2xl:px-[35%]'>
        <div className="heading py-5">
            <h1 className='text-5xl text-white font-bold text-center'>Education</h1>
        </div>
        <div className="EduBox flex flex-col border-2 items-center  ">
            <div className="box1">
                <div className="college-info flex p-2" id='collegeInfo'>
                    <img src="./gita.png" className='h-[50px] md:h-[80px]' alt="" />
                    <div className="college-details text-white flex flex-col pl-3">
                    <h1 className="collegeName font-semibold md:text-lg text-white ">Gandhi Institute Of Technology and Advancement(GITA)</h1>
                    <p className="course text-slate-300 text-sm">Bachelor of Technology - BTech, Computer Science and Engineering</p>
                    <p className='text-gray-300 text-sm'>2021-25</p>
                    </div>
                </div>
                <div className="college-desc md:text-xl text-white hidden " id='collegeDesc'>
                I am currently pursuing a Bachelor's degree in Computer Science and Engineering at GITA, Bhubaneswar. I have completed 4 semesters and have a CGPA of 9.3. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am learning and working on exciting projects with a team of talented developers.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education