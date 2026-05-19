import React, { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const variants = {
    hidden : {
        opacity: 0,
        y: 25
    },
    visible : {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            staggerChildren: 0.2
        }
    }
}

const childVariants = {
    hidden: {
        opacity: 0,
        y: 10
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75
        }
    }
}

const About = () => {

    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref)
    
  return (
    <div id='about' className='w-full mx-auto scroll-mt-[100px] lg:px-44 sm:px-24 px-4'>
        <motion.h1 className='sm:text-5xl text-4xl font-bold text-center pb-14 bg-gradient-to-r bg-clip-text text-transparent from-purple-500 to-purple-200'
            variants={variants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
        >
            ABOUT ME
        </motion.h1>
        <motion.div className='border border-purple-500 bg-purple-900/5 backdrop-blur-xs lg:p-10 sm:p-7 p-5 rounded-xl flex flex-col gap-6'
            ref={ref}
            variants={variants}
            initial='hidden'
            animate={isInView? 'visible' : 'hidden'}
        >
            <motion.p className='lg:text-xl sm:text-lg text-md opacity-80'
                variants={childVariants}
            >
            👋 Hey there! I&apos;m Chakka Kishore Sri Valli Vinayak, a passionate developer currently pursuing my B.Tech in Computer Science and Engineering at Indian Institute of Information Technology, Sri City (2023-2027). 
            </motion.p>
            <motion.p className='lg:text-xl sm:text-lg text-md opacity-80'
                variants={childVariants}
            >
            I have a deep interest in building real-world applications and continuously exploring new and emerging technologies. Whether it&apos;s web development, software engineering, or tech innovations, I love understanding how things work and creating impactful solutions.
            </motion.p>
            <motion.p className='lg:text-xl sm:text-lg text-md opacity-80'
                variants={childVariants}
            >
            Right now, I&apos;m focused on strengthening my foundation in Data Structures and Algorithms (DSA) to enhance my problem-solving skills and prepare for future opportunities in software development and tech interviews.
            </motion.p>
            <motion.div
                variants={childVariants}
                className='self-center'
            >
            </motion.div>
        </motion.div>
    </div>
  )
}

export default About