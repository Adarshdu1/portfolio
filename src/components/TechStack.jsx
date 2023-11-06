"use client";
import React from "react";
import {
  BiLogoHtml5,
  BiLogoTailwindCss,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoNodejs,
} from "react-icons/bi";
import {
  SiNextdotjs,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiFramer,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";
export default function TechStack() {
  return (
    <div className="pb-10 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-5xl font-semibold p-10 mb-10">
          TECH STACK
        </div>
        <div className="flex flex-col space-y-10">
          <div className="flex items-center justify-evenly">
            <BiLogoHtml5 className="text-9xl text-orange-500" />
            <BiLogoCss3 className="text-9xl text-blue-500" />
            <BiLogoJavascript className="text-9xl text-yellow-500" />
            <BiLogoReact className="text-9xl text-blue-500" />
            <SiNextdotjs className="text-9xl" />
            <BiLogoTailwindCss className="text-9xl text-blue-400" />
          </div>
          <div className="flex items-center justify-evenly">
            <BiLogoNodejs className="text-9xl text-green-500" />
            <SiMysql className="text-9xl text-blue-500" />
            <SiMongodb className="text-9xl text-green-500" />
            <SiPostman className="text-9xl text-orange-500" />
            <SiFramer className="text-9xl text-blue-500" />
            <BsGit className="text-9xl text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
