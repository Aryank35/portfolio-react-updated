import React from 'react'
const Card = (props) => {
  return (
        <div className="box1 w-[90%] sm:w-[70%] md:[80%] flex flex-col  border-2 items-center rounded-md">
                <div className="college-info flex py-4 px-2" id='collegeInfo'>
                    <img src={props.img} className='h-[50px] md:h-[80px]' alt="" />
                    <div className="college-details text-white flex flex-col pl-3">
                    <h1 className="collegeName font-semibold md:text-lg text-white ">{props.collegeName}</h1>
                    <p className="course text-slate-300 text-sm">{props.course}</p>
                    <p className="course text-slate-200 text-sm"> GRADE: {props.grade}</p>
                    <p className='text-gray-300 text-sm'>{props.period}</p>
                </div>
                </div>
                {/* <div className="college-desc md:text-xl text-white hidden " id='collegeDesc'>
                I am currently pursuing a Bachelor's degree in Computer Science and Engineering at GITA, Bhubaneswar. I have completed 4 semesters and have a CGPA of 9.3. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am learning and working on exciting projects with a team of talented developers.
                </div> */}
            </div>

  )
}

export default Card