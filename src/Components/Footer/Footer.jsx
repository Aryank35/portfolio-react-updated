import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faInstagram, faLinkedin, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className='flex flex-col space-y-7 py-9 bg-[#1c1c27] w-full'>
        <h1 className='text-[#854ce6] sm:text-2xl text-xl font-semibold text-center'>Aryan kumar Mohapatra</h1>
        <div className='nav-links  '>
        <ul className='flex flex-col items-center sm:flex-row justify-center text-lg sm:space-x-2 font-semibold md:text-xl md:space-x-12 text-white'>
            <li><a className='hover:text-purple-400' href="#hero">About</a></li>
            <li><a className='hover:text-purple-400' href="#skills">Skills</a></li>
            <li><a className='hover:text-purple-400' href="#project">Projects</a></li>
            <li><a className='hover:text-purple-400' href="#education">Education</a></li>
          </ul>
        </div>
        <div className="socialConnect    flex  items-center justify-center space-x-5 sm:space-x-14 font-bold text-2xl">
            <a className='text-white' target='_blanck' href="https://www.linkedin.com/in/aryan-kumar-mohapatra-2751361a9/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a className='text-white' target='_blanck' href="https://github.com/Aryank35"><FontAwesomeIcon icon={faGithub} /></a>
            <a className='text-white' target='_blanck' href="https://twitter.com/AryanKumarMoha5"><FontAwesomeIcon icon={faTwitter} /></a>
            <a className='text-white' target='_blanck' href="https://www.facebook.com/profile.php?id=100010444745012"><FontAwesomeIcon icon={faSquareFacebook} /></a>
            <a className='text-white' target='_blanck' href="https://www.instagram.com/aryan_mohapatra_35/"><FontAwesomeIcon icon={faInstagram} /></a>
            
            
        </div>
        <div className="copyright flex mx-auto pt-4">
            <p className='text-white text-center'>© 2023 Aryan kumar Mohapatra. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer