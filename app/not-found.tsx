'use client'
import React from 'react';
import { motion } from 'motion/react';
import { PiWarningCircleLight } from "react-icons/pi";
import Link from 'next/link';

const NotFound = () => {
  return (
    <section className="purple-background h-screen flex flex-col items-center justify-center text-center relative px-6">
      <div className='absolute top-0 right-0 bg-purple-500 w-[150px] h-[150px] opacity-80 blur-[150px] rounded-full' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 bg-purple-500 w-[200px] h-[200px] opacity-80 blur-[150px] rounded-full' />
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6 z-10"
      >
        <PiWarningCircleLight className="text-purple-300 text-9xl" />
        <h1 className="text-4xl sm:text-6xl font-semibold text-purple-200">
          404 - Page Not Found
        </h1>
        <p className="text-lg sm:text-xl text-purple-100/80 max-w-xl">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-4 px-6 py-2 border border-purple-400 text-purple-300 rounded-full hover:bg-purple-600/20 transition-all"
        >
          Go Back Home
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;
