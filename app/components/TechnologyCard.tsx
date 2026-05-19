import React from 'react'
import { Technology } from '@/data/techStack'
import { motion } from 'motion/react'

const cardVariants = {
  scaleup: {
    scale: 1.25,
    transition: {
      duration: 0.2
    }
  }
}

const TechnologyCard = ({ technology, icon }: Technology) => {
  return (
    <motion.div 
    whileHover='scaleup'
    className='flex items-center gap-2 lg:text-lg text-sm bg-neutral-900 lg:px-5 sm:px-4 px-3 sm:py-1.5 py-2 border border-neutral-700 rounded-xl shadow-lg shadow-purple-500/10'>
        <motion.img 
            src={`/icons/${icon}`} 
            alt="technology-icon"     
            className='sm:h-6 h-4 scale-125 sm:scale-100'
            variants={cardVariants}
        />
        <h3 className='opacity-90'>
            {technology}
        </h3>
    </motion.div>
  )
}

export default TechnologyCard