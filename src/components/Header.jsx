"use client";
import React from "react";
import SVG from "./SVG";
import { motion } from "framer-motion";
import HamburgerMenu from "./HamburgerMenu";
export default function Header() {
  return (
    <>
      <div className="px-5 bg-gray-900 bg-opacity-80 lg:px-2">
        <div className=" lg:max-w-7xl lg:mx-auto">
          <motion.div className="pb-8  flex justify-between items-center">
            {/* Logo */}
            <SVG />
            {/* Nav link */}
            <div className="pt-8 flex justify-center items-center">
              <ul className=" hidden text-white font-semibold sm:flex justify-between space-x-10 items-center">
                <li className="hover:opacity-80 active:opacity-70">
                  <a href="#">HOME</a>
                </li>
                <li className="hover:opacity-80 active:opacity-70">
                  <a href="#education">EDUCATION</a>
                </li>
                <li className="hover:opacity-80 active:opacity-70">
                  <a href="#project">PROJECT</a>
                </li>
                <li className="hover:opacity-80 active:opacity-70">
                  <a href="#contact">CONTACT</a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      <HamburgerMenu />
    </>
  );
}
