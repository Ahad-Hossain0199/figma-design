import React from 'react'
import Button from './Button'
import arrow from "../assets/arrow.svg";
import Counterup from './Counterup';
import bannar from '../assets/bannar.png';
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ahad1 from '../assets/ahad.png';
import ahad from '../assets/ahad2.png';

const Slider = SlickSlider?.default ?? SlickSlider;

const Banner = () => {
        var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        appendDots: dots => (
            <div className='relative'>
                <ul className='absolute  rotate-90 -top-70 -right-6.75' style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className='bg-[#808080] w-3 h-3 rounded-full' >
            </div>
        )
    };
  return (
    <div>

           <section className='bg-[#202020] relative'>
                <hr className='border-b-secondary/30 border' />
                <div className="container">
                    <div className='grid grid-cols-12'>
                        <div className='col-span-4 pt-7.5'>
                            <h1 className="text-[76px] leading-[0.9]  text-secondary  font-medium ">
                                <div className='flex gap-25'>
                                    <span className="block">GET</span>
                                    <span className=''>YOUR</span>
                                </div>
                                <div>
                                    <p className='text-[15px] font-normal'>Always available for freelance work, contact me and get your greate design </p>
                                </div>
                                <span className="block">GREAT</span>
                                <span className="block ml-18">DESIGN</span>
                            </h1>
                            <p className='text-[15px] font-normal text-secondary mt-12 w-95'>Hello, my name is Pattison and i am UX/UI designer and front-end developer, im working via developer 9 years and i know all about design</p>
                            <div className='  mt-25 ml-60'>
                                <Button text="hire me"><img src={arrow} alt="" /></Button>
                            </div>
                            <Counterup />
                        </div>
                        <div className="relative col-span-8">
                            <img src={bannar} alt="" className="w-full" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Slider {...settings} className="w-full">
                                    <div>
                                        <div className="flex justify-center items-center">
                                            <div className="w-120 h-120 rounded-full bg-secondary overflow-hidden">
                                                <img src={ahad1} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="-ml-20 w-120 h-120 rounded-full bg-[#131313]/70 overflow-hidden">
                                                <img src={ahad} className="w-full h-full object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-center items-center">
                                            <div className="w-120 h-120 rounded-full bg-secondary overflow-hidden">
                                                <img src={ahad1} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="-ml-20 w-120 h-120 rounded-full bg-[#131313]/70 overflow-hidden">
                                                <img src={ahad} className="w-full h-full object-cover" />
                                            </div>

                                        </div>
                                    </div>
                                     <div>
                                        <div className="flex justify-center items-center">
                                            <div className="w-120 h-120 rounded-full bg-secondary overflow-hidden">
                                                <img src={ahad1} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="-ml-20 w-120 h-120 rounded-full bg-[#131313]/70 overflow-hidden">
                                                <img src={ahad} className="w-full h-full object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-center items-center">
                                            <div className="w-120 h-120 rounded-full bg-secondary overflow-hidden">
                                                <img src={ahad1} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="-ml-20 w-120 h-120 rounded-full bg-[#131313]/70 overflow-hidden">
                                                <img src={ahad} className="w-full h-full object-cover" />
                                            </div>

                                        </div>
                                    </div>

                                </Slider>

                            </div>

                        </div>
                    </div>
                </div>
                <div className=' text-[38px] uppercase text-secondary  font-normal flex justify-between'>
                    <h2 className=" rotate-270 absolute bottom-50 -left-24">my name is robert</h2>
                    <h3 className=" rotate-270 absolute top-15 left-13">1.0</h3>
                </div>
            </section >

      
    </div>
  )
}

export default Banner
