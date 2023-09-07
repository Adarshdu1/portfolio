"use client";
import React from "react";
import SVG from "./SVG";
import { motion } from "framer-motion";
import HamburgerMenu from "./HamburgerMenu";
export default function Header() {
  return (
    <>
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="px-5 bg-gray-700 lg:px-2"
      >
        <div className=" lg:max-w-7xl lg:mx-auto">
          <motion.div className="pb-8  flex justify-between items-center">
            {/* Logo */}
            <SVG />
            {/* Nav link */}
            <motion.div
              initial={{ opacity: 0, x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="pt-8 flex justify-center items-center"
            >
              <ul className=" hidden text-white font-semibold sm:flex justify-between space-x-10 items-center">
                <li className="">
                  <a href="#">HOME</a>
                </li>
                <li className="">
                  <a href="#education">EDUCATION</a>
                </li>
                <li className="">
                  <a href="#project">PROJECT</a>
                </li>
                <li className="">
                  <a href="#contact">CONTACT</a>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <HamburgerMenu />
    </>
  );
}
