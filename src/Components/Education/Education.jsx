import React from 'react'

const Education = () => {
  return (
    
    <div className='Education bg-purple-950 w-full items-center py-4 mx-auto'>
        <div className="heading py-5">
            <h1 className='text-5xl text-white font-bold text-center'>Education</h1>
        </div>
        <div className="EduBox mx-[300px] flex flex-col border-2 items-center  ">
            <div className="box1">
                <div className="college-info flex p-2" id='collegeInfo'>
                    <img src="./gita.png" className='w-[75px]' alt="" />
                    <div className="college-details text-white flex flex-col pl-3">
                    <h1 className="collegeName font-semibold text-lg text-white ">Gandhi Institute Of Technology and Advancement(GITA)</h1>
                    <p className="course text-slate-300">Bachelor of Technology - BTech, Computer Science and Engineering</p>
                    <p className='text-sm text-gray-300'>2021-25</p>
                    </div>
                </div>
                <div className="college-desc text-xl text-white hidden " id='collegeDesc'>
                I am currently pursuing a Bachelor's degree in Computer Science and Engineering at GITA, Bhubaneswar. I have completed 4 semesters and have a CGPA of 9.3. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am learning and working on exciting projects with a team of talented developers.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education