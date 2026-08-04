import React from 'react'

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <div>

          <nav className='bg-[#202020] py-7'>
                <div className="container">
                    <div className='flex justify-between items-center'>
                        <div className='text-secondary font-normal text-[38px] flex items-center gap-10'>
                            P
                            <div className='flex gap-5 text-secondary text-[18px]'>
                                <FaFacebookF />
                                <FaTwitter />
                                <FaLinkedin />
                            </div>
                        </div>
                        <ul className='flex items-center gap-16 text-secondary font-normal text-[14px]'>
                            <li> <NavLink to="/">HOME</NavLink></li>
                            <li> <NavLink to="/projects">PROJECTS</NavLink></li>
                            <li> <NavLink to="/awwards">AWWARDS</NavLink></li>
                            <li> <NavLink to="/testimonial">TESTIMONIAL</NavLink></li>
                            <li> <NavLink to="/blog">BLOG</NavLink></li>
                            <li> <NavLink to="/contact">CONTACT</NavLink></li>
                        </ul>
                        <div>
                            <p  className='font-normal text-[15px] text-secondary'>+2(315) 590 83 68</p>
                        </div>
                    </div>
                </div>
            </nav>

      
    </div>
  )
}

export default NavBar
