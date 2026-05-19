"use client"

import React, { useState } from "react";
import { AnimatePresence, motion, useScroll } from 'motion/react'; 
import { RxCross2 } from "react-icons/rx";
import { TbMenu3 } from "react-icons/tb";

const Header = () => {
  const [active, setActive] = useState<string>('home');
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navItems = ['home', 'about', 'projects', 'skills', 'education'];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setIsOpen(false);
    }
  };

  const renderNavButtons = () =>
    navItems.map((item) => (
      <button
        key={item}
        className={`w-full relative cursor-pointer text-lg ${
          active === item
            ? 'bg-purple-400/50 after:content-[""] after:absolute sm:after:h-0.5 after:w-1/3 sm:after:bg-white after:-top-1.75 after:left-1/2 after:-translate-x-1/2 after:rounded-t-full sm:after:shadow-[0_0_10px_6px_rgba(255,255,255,0.6)]'
            : 'bg-transparent'
        } sm:rounded-full rounded-lg py-1 px-4`}
        onClick={() => scrollToSection(item)}
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </button>
    ));

  return (
    <header className="h-[100px] mx-4 sticky z-[999] top-0 left-0 flex flex-col items-center">
      <motion.button
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="sm:hidden w-full flex justify-between items-center gap-2 rounded-lg bg-purple-900/10 backdrop-blur-md border border-purple-700 mt-6 px-4 py-2"
        onClick={() => setIsOpen(!isOpen)}
      > 
        <span className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-100 to-purple-300">Chakka Kishore Sri Valli Vinayak</span>
        {isOpen ? <RxCross2 className="text-4xl" /> : <TbMenu3 className="text-4xl" />}
      </motion.button>

      <AnimatePresence>
      {isOpen && (
        <motion.nav
          className="sm:hidden origin-top flex flex-col bg-purple-900/10 backdrop-blur-md p-1 border border-purple-700 rounded-xl w-full mt-2"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          >
          <motion.div
            className="absolute -bottom-0.25 left-[5%] h-0.5 w-full bg-purple-600 rounded-full"
            style={{ scaleX: scrollYProgress }}
            initial={{ width: "90%" }}
            />
          {renderNavButtons()}
        </motion.nav>
      )}
      </AnimatePresence>

      <AnimatePresence>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="hidden sm:grid grid-cols-5 items-center p-1 border border-purple-700 bg-purple-900/10 backdrop-blur-md rounded-full mt-6">
          <motion.div
            className="absolute -bottom-0.25 left-[5%] h-0.5 w-full bg-purple-600 rounded-full"
            style={{ scaleX: scrollYProgress }}
            initial={{ width: "90%" }}
          />
          {renderNavButtons()}
      </motion.nav>
      </AnimatePresence>
    </header>
  );
};

export default Header;