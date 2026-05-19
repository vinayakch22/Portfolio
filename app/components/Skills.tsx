'use client'
import React, { useRef } from 'react'
import { technologies } from '../../data/techStack'
import TechnologyCard from './TechnologyCard'
import { motion, useInView, useScroll, useTransform } from 'motion/react'

const variants = {
  hidden: {
    opacity: 0,
    y: 25
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      staggerChildren: 0.1
    }
  }
}

const childVariants = {
  hidden: {
    opacity: 0,
    rotate: -14,
    scale: 0.25
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.3
    }
  }
}

const Skills = () => {

  const ref = useRef<HTMLDivElement>(null);
  const svgref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const { scrollYProgress } = useScroll({
    target: svgref,
    offset: ["start end", "end start"],
  });
  const pathLength = useTransform(scrollYProgress, [0.10, 0.45], [0, 1]);

  return (
    <section ref={svgref} id='skills' className='relative black-background flex flex-col gap-6 justify-between items-center pt-[100px] pb-20 lg:px-44 sm:px-28 px-4'>
        <motion.h1 
          className='sm:text-5xl text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-purple-500 to-purple-200 z-20'
          variants={variants}
          initial='hidden'
          whileInView='visible'
          >
          MY TECH STACK
        </motion.h1>
        <svg viewBox="0 0 200 200" className='sm:h-[150px] h-[100px] opacity-75'>
        <motion.path
          d="M70 60 L0 100 L70 140" // < 
          stroke="#A78BFA"
          strokeWidth="8"
          fill="none"
          style={{ pathLength }}
          strokeLinecap="round"
        />
        <motion.path
          d="M130 60 L200 100 L130 140" // > 
          stroke="#A78BFA"
          strokeWidth="8"
          fill="none"
          style={{ pathLength }}
          strokeLinecap="round"
        />
        <motion.path
          d="M115 25 L85 175" // /
          stroke="#A78BFA"
          strokeWidth="8"
          fill="none"
          style={{ pathLength }}
          strokeLinecap="round"
        />
      </svg>
      <motion.div
        ref={ref} 
        className='flex justify-center gap-4 flex-wrap lg:max-w-4/5'
        variants={variants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        >
        {technologies.map(tech => {
          return (
          <motion.div 
            key={tech.id} 
            variants={childVariants}
            whileHover={{ rotate: 4 }}
          >
            <TechnologyCard id={tech.id} technology={tech.technology} icon={tech.icon} />
          </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

export default Skills