import React from 'react'
import data from "../../utills/EduInfo"
import Card from './Card'

const Education = () => {
  return (
    <div id='education' className='Education bg-[#1b1e2e] w-full items-center py-8 mx-auto  md:px-[20%] 2xl:px-[35%]'>
        <div className="heading py-5">
            <h1 className='text-5xl text-white font-bold text-center'>Education</h1>
        </div>
        <div className="EduBox space-y-9 flex flex-col justify-center items-center">
            {
                data.map((card)=>{
                    return(
                        <Card 
                            img={card.collegeLogo}
                            collegeName={card.collegeName}
                            course={card.course}
                            grade = {card.grade}
                            period={card.period}
                            details={card.details}
                        />
                    )
                })
            }
            
            
            
        </div>
    </div>
  )
}

export default Education