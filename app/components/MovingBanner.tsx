import Marquee from "react-fast-marquee";
import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { PiDiamondLight } from 'react-icons/pi';

const MovingBanner = () => {
  return (
      <Marquee 
        autoFill={true} 
        gradient={true}  
        gradientWidth={100} 
        gradientColor="#A855F7"
        className="bg-purple-500 -rotate-3 lg:h-16 sm:h-14 h-12">
        <FaHtml5 className="lg:text-5xl sm:text-4xl text-3xl" />
        <PiDiamondLight className="lg:text-base sm:text-sm text-xs sm:mx-8 mx-4" />
        <FaCss3Alt className="lg:text-5xl sm:text-4xl text-3xl" />
        <PiDiamondLight className="lg:text-base sm:text-sm text-xs sm:mx-8 mx-4" />
        <IoLogoJavascript className="lg:text-5xl sm:text-4xl text-3xl" />
        <PiDiamondLight className="lg:text-base sm:text-sm text-xs sm:mx-8 mx-4" />
        <FaReact className="lg:text-5xl sm:text-4xl text-3xl" />
        <PiDiamondLight className="lg:text-base sm:text-sm text-xs sm:mx-8 mx-4" />
        <SiTypescript className="lg:text-5xl sm:text-4xl text-3xl" />
        <PiDiamondLight className="lg:text-base sm:text-sm text-xs sm:mx-8 mx-4" />
        <FaNodeJs className="lg:text-5xl sm:text-4xl text-3xl" />
        <PiDiamondLight className="lg:text-base sm:text-sm text-xs sm:mx-8 mx-4" />
        <SiExpress className="lg:text-5xl sm:text-4xl text-3xl" />
        <PiDiamondLight className="lg:text-base sm:text-sm text-xs sm:mx-8 mx-4" />
        <SiMongodb className="lg:text-5xl sm:text-4xl text-3xl" />
        <PiDiamondLight className="lg:text-base sm:text-sm text-xs sm:mx-8 mx-4" />
        <SiMysql className="lg:text-5xl sm:text-4xl text-3xl" />
        <PiDiamondLight className="lg:text-base sm:text-sm text-xs sm:mx-8 mx-4" />
        <RiNextjsFill className="lg:text-5xl sm:text-4xl text-3xl" />
        <PiDiamondLight className="lg:text-base sm:text-sm text-xs sm:mx-8 mx-4" />
        <IoLogoGithub className="lg:text-5xl sm:text-4xl text-3xl" />
        <PiDiamondLight className="lg:text-base sm:text-sm text-xs sm:mx-8 mx-4" />
      </Marquee>
  )
}

export default MovingBanner;
