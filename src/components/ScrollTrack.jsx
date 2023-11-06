"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";
export default function ScrollTrack() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500 origin-[0%] z-40"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}
