'use client'

import React from 'react'
import { motion } from 'motion/react'
import { PiCodeLight, PiReadCvLogo } from "react-icons/pi";
import About from './About';
import MovingBanner from './MovingBanner';
import { FaLinkedinIn } from 'react-icons/fa';
import { GrGithub } from 'react-icons/gr';
import { MdOutlineMail } from 'react-icons/md';
import { myData } from '../../data/myData';
import Image from 'next/image';

const variants = {
  hidden: {
    y : 5,
    opacity : 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition : {
      duration : 0.5,
      staggerChildren: 0.15
    }
  }
}

const childVariants = { 
  hidden: {
    y: 5,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
}

const Home = () => {
  return (
    <section id='home' className='relative black-background min-h-screen flex flex-col lg:gap-25 gap-15 scroll-mt-[100px] pb-20'>
      <div className='absolute top-0 right-0 bg-purple-500 w-[150px] h-[150px] opacity-80 blur-[150px] rounded-full' />
      <div className='absolute top-1/4 left-1/2 -translate-1/2 bg-purple-500 w-[200px] h-[200px] opacity-80 blur-[150px] rounded-full' />
      <div>
        <PiCodeLight className='sm:text-[20rem] text-[15rem] text-purple-500 opacity-10 absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2 scale-infinite' />
      </div>
      <div className='h-full flex lg:flex-row flex-col sm:justify-between gap-10 lg:items-start items-center lg:px-44 sm:px-28 px-4'>
        <motion.div 
          className='flex flex-col gap-2'
          variants={variants}  
          initial='hidden'
          animate='visible'
        >
          <motion.h1 className='sm:text-5xl text-3xl font-semibold bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text text-transparent'
            variants={childVariants}
            >
            FULL-STACK DEVELOPER
          </motion.h1>
          <motion.h2 className='sm:text-8xl text-6xl'
            variants={childVariants}
            >
            Ch Vinayak
          </motion.h2>
          <motion.p className='sm:text-xl text-md font-light lg:max-w-3/4 sm:max-w-4/5 border-l-2 border-gray-500/50 pl-6 my-6'
            variants={childVariants}
            >
            I build purpose-driven web solutions that prioritize speed, simplicity, and meaningful impact.
          </motion.p>
          <div className="flex items-center gap-2">
          <motion.a 
            href={`https://www.linkedin.com/in/${myData.linkedin}/`} 
            target="_blank" 
            className="text-2xl p-1.5 z-10 border border-purple-400 rounded-full text-purple-400 hover:scale-110 transition-all duration-300"
            variants={childVariants}
          >
            <FaLinkedinIn />
          </motion.a>
          <motion.a 
            href={`https://github.com/${myData.github}`}
            target="_blank" 
            className="text-2xl p-1.5 z-10 border border-purple-400 rounded-full text-purple-400 hover:scale-110 transition-all duration-300"
            variants={childVariants}
          >
            <GrGithub />
          </motion.a>
          <motion.a 
            href={myData.resume} 
            target="_blank" 
            className="text-2xl p-1.5 z-10 border border-purple-400 rounded-full text-purple-400 hover:scale-110 transition-all duration-300"
            variants={childVariants}
          >
            <PiReadCvLogo />
          </motion.a>
          <motion.a 
            href={`mailto:${myData.email}`} 
            target="_blank" 
            className="text-2xl p-1.5 z-10 border border-purple-400 rounded-full text-purple-400 hover:scale-110 transition-all duration-300"
            variants={childVariants}
          >
            <MdOutlineMail />
          </motion.a>
        </div>
        </motion.div>
        <motion.div 
          className='relative lg:min-w-[350px] lg:h-[450px] lg:w-[450px] sm:h-[350px] sm:w-[350px] h-[275px] w-[275px] z-20 overflow-hidden rounded-4xl lg:rotate-6 border-2 border-purple-900 hover:border-purple-600 hover:rotate-0 duration-350 transition-all'
          variants={childVariants}
          initial='hidden'
          animate='visible'
          >
          <Image 
            src="/user.jpg" 
            alt="user-img" 
            className='object-cover' 
            fill
          />
        </motion.div>
      </div>
      <div className='relative w-full mt-10'>
        <div className='absolute w-full lg:h-16 sm:h-14 h-12 bg-purple-400/50 rotate-3' />
        <MovingBanner />
      </div>
      <About />
    </section>
  )
}

export default Home