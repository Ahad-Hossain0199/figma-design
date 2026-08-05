import React from 'react'
import { IoArrowUpSharp } from "react-icons/io5";
import Button from '../Components/Button';
import arrow from "../assets/arrow.svg";


const Projects = () => {
    return (
        <div>
            <section className='bg-[#202020] realtive'>
                <hr className='border-b-secondary/30 border' />
                <div className="container">
                    <div className='grid grid-cols-12'>
                        <div className='col-span-4'>
                            <div>
                                <h2 className="text-[76px] text-secondary  font-medium uppercase ">projects</h2>
                            </div>
                            <ul className='font-normal text-[22px] text-secondary/50 mt-32.5 mb-18'>
                                <li className='flex items-center justify-between border-y border-secondary/30 py-2 pl-6'>BERLING agency website <IoArrowUpSharp />
                                </li>
                                <li className=' border-y border-secondary/30 py-2 pl-6'>Prettylittlething american shop</li>
                                <li className=' border-y border-secondary/30 py-2 pl-6'>Benhome - Architecture theme</li>
                                <li className=' border-y border-secondary/30 py-2 pl-6'>Gilhouse - architecture website</li>
                                <li className=' border-y border-secondary/30 py-2 pl-6'>gilber - personal website</li>
                                <li className=' border-y border-secondary/30 py-2 pl-6'>jonny - personal website</li>
                            </ul>
                            <div className='  mt-25 ml-60'>
                                <Button text="View all works"><img src={arrow} alt="" /></Button>
                            </div>
                        </div>
                        <div className="col-span-8 flex justify-center items-center pt-10 pl-10 pr-10">
                            <div className="w-full h-180 bg-secondary"></div>
                        </div>
                    </div>
                </div>
                <div className=' text-[38px] uppercase text-secondary  font-normal flex justify-between'>
                    <h2 className=" rotate-270 absolute bottom-30 left-0 uppercase">Portfolio</h2>
                    <h3 className=" rotate-270 absolute top-40 left-13">2.0</h3>
                </div>
            </section>

        </div>
    )
}

export default Projects