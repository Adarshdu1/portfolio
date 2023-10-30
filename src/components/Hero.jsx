"use client";
import Image from "next/image";
import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsDiscord, BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
export default function Hero() {
  const imgUrl = "/profile_portfolio.png";
  const cvUrl =
    "https://drive.google.com/file/d/1CJAL1d5mNlRKlHh1A9pQKc2l4zZFhN_7/view?usp=sharing";
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["WEB DEVELOPER", "UI/UX DESIGNER", "COMPETITIVE PROGRAMMER"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-white grid grid-cols-2 min-h-screen">
            <div className="hidden lg:flex lg:flex-col justify-end">
              <Image className="" src={imgUrl} height={600} width={600} />
            </div>
            <div className="p-10 flex flex-col justify-center">
              <div className="text-6xl mt-[30%]">HI👋, I'M ADARSH</div>
              <div className="text-4xl mt-4">
                A <span className="" ref={el}></span>
              </div>
              <div className="flex space-x-4 mt-8">
                <button className="p-2 hover:bg-gray-700 active:bg-gray-800 duration-100 hover:shadow-md transition-all  rounded-lg text-xl bg-gray-500">
                  <Link to={cvUrl} download>
                    DOWNLOAD CV
                  </Link>
                </button>
                <button className="p-2 hover:bg-red-600 active:bg-red-800 duration-100 hover:shadow-md transition-all rounded-lg bg-red-500 text-xl">
                  <a href="#contact">HIRE ME</a>
                </button>
              </div>
              <div className="mt-8 flex space-x-6">
                <Link to="https://www.linkedin.com/in/adarsh-kumar-dubey-12o05o04/">
                  <BsLinkedin className="hover:text-blue-600 active:text-blue-800 text-blue-400 text-4xl" />
                </Link>
                <Link to="https://github.com/Adarshdu1">
                  <BsGithub className="hover:opacity-80 active:opacity-70 text-white text-4xl" />
                </Link>
                <Link to="https://twitter.com/CodeAdarsh">
                  <RiTwitterXFill className="text-white text-4xl hover:opacity-80 active:opacity-70" />
                </Link>
                <Link to="https://www.instagram.com/itz_adarsh125/">
                  <BsInstagram className="text-4xl text-red-400 hover:text-red-500 active:text-red-800" />
                </Link>
                <Link to="https://discord.com/channels/adarshkd">
                  <BsDiscord className="text-4xl text-blue-400 hover:text-blue-600 active:text-blue-800" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
