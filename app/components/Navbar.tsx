"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <header className="h-[100px] sticky z-[999] top-0 left-0 flex items-center justify-center mx-4">
      {/* Mobile View */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full sm:hidden flex justify-between items-center bg-purple-900/10 backdrop-blur-md border border-purple-700 rounded-lg px-4 py-2"
      >
        <span className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-100 to-purple-300">
          Chakka Kishore Sri Valli Vinayak
        </span>
        <Link href="/">
          <FaHome className="text-3xl" />
        </Link>
      </motion.nav>

      {/* Desktop View */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="hidden sm:grid grid-cols-2 gap-14 items-center justify-between p-1 border border-purple-700 bg-purple-900/10 backdrop-blur-md rounded-full relative"
      >
        <span className="text-2xl px-6 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-100 to-purple-300">
          Chakka Kishore Sri Valli Vinayak
        </span>

        <div className="flex justify-end">
          <Link
            href="/"
            className="text-lg rounded-full px-6 p-1 bg-purple-400/50 hover:bg-purple-500 transition"
          >
            Home
          </Link>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
