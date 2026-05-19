import { myData } from '@/data/myData';
import React from 'react'
import { MdOutlineMail } from 'react-icons/md';
import { PiReadCvLogo } from 'react-icons/pi';
import { SiLeetcode } from 'react-icons/si';
import { SlSocialLinkedin } from 'react-icons/sl';
import { VscGithubAlt } from 'react-icons/vsc';

const Footer = () => {
  return (
    <footer className='black-background lg:pt-20 pt-15 pb-10 lg:px-44 sm:px-28 px-4 flex flex-col items-center'>
      <div className='w-full flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-10'>
        <div className='lg:w-2/3 flex flex-col gap-4 items-center lg:items-start'>
          <span className='text-2xl sm:text-3xl font-bold'>Chakka Kishore Sri Valli Vinayak</span>
          <p className='text-neutral-400 text-sm sm:text-base'>Blending creativity with code to bring your vision to life.</p>
          <div className='flex gap-1'>
            <a 
              href={`https://www.linkedin.com/in/${myData.linkedin}/`} 
              target="_blank" 
              className="text-2xl lg:text-xl hover:scale-110 transition-all duration-300 p-1"
            >
              <SlSocialLinkedin />
            </a>
            <a 
              href={`https://github.com/${myData.github}`}
              target="_blank" 
              className="text-2xl lg:text-xl hover:scale-110 transition-all duration-300 p-1"
            >
              <VscGithubAlt />
            </a>
            <a 
              href={myData.resume}
              target="_blank" 
              className="text-2xl lg:text-xl hover:scale-110 transition-all duration-300 p-1"
            >
              <PiReadCvLogo />
            </a>
            <a 
              href={`https://leetcode.com/u/${myData.leetcode}/`} 
              target="_blank" 
              className="text-2xl lg:text-xl hover:scale-110 transition-all duration-300 p-1"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>
        <div className='lg:w-1/3 flex flex-col gap-2 items-center lg:items-start'>
          <p className='lg:text-lg text-base text-center lg:text-left'>Feel free to reach out to me for any inquiries or collaboration opportunities.</p>
          <p>
            <a 
              className='flex items-center gap-2 text-blue-500 hover:underline lg:p-1 no-expand'
              href={`mailto:${myData.email}`}>
                <MdOutlineMail className='lg:text-xl text-lg' /> {myData.email}
            </a>
          </p>
        </div>
      </div>
      <div className='w-full h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent my-10 rounded-full' />
      <div>
        <p className='text-center text-sm text-neutral-400'>&copy; 2025 Chakka Kishore Sri Valli Vinayak. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer