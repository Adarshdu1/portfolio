"use client";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-900">
      <div className="max-w-7xl mx-auto p-10">
        <div className="flex items-center justify-between text-white">
          <div className="">
            <h1 className="uppercase">Coding Profile</h1>
            <ul className="pt-2" style={{ listStyleType: "disc" }}>
              <li>
                <Link
                  className=" hover:shadow-sm hover:underline hover:underline-offset-2 hover:underline-transparent hover:text-white  hover:text-opacity-40 hover:duration-50 hover:ease-in-out hover:delay-5 "
                  href={
                    "https://auth.geeksforgeeks.org/user/dubeyad2003/practice"
                  }
                >
                  GeeksForGeeks
                </Link>
              </li>
              <li>
                <Link
                  className=" hover:shadow-sm hover:underline hover:underline-offset-2 hover:underline-transparent hover:text-white  hover:text-opacity-40 hover:duration-50 hover:ease-in-out hover:delay-5 "
                  href={"https://leetcode.com/adarsh_20_03/"}
                >
                  LeetCode
                </Link>
              </li>
              <li>
                <Link
                  className=" hover:shadow-sm hover:underline hover:underline-offset-2 hover:underline-transparent hover:text-white  hover:text-opacity-40 hover:duration-50 hover:ease-in-out hover:delay-5 "
                  href={"https://www.codechef.com/users/adarsh_20_04"}
                >
                  CodeChef
                </Link>
              </li>
              <li>
                <Link
                  className=" hover:shadow-sm hover:underline hover:underline-offset-2 hover:underline-transparent hover:text-white  hover:text-opacity-40 hover:duration-50 hover:ease-in-out hover:delay-5 "
                  href={"https://codeforces.com/profile/hakdcode_1"}
                >
                  CodeForces
                </Link>
              </li>
            </ul>
          </div>
          <div className="uppercase flex flex-col items-center justify-center">
            <div>All Right Reserved</div>
            <div>Copyright &copy; 2023</div>
            <div>Made using Next.js</div>
          </div>
          <div className="">
            <h1 className="uppercase">Connect with me</h1>
            <div className="">
              <ul className="pt-2" style={{ listStyleType: "disc" }}>
                <li>
                  <Link
                    className=" hover:shadow-sm hover:underline hover:underline-offset-2 hover:underline-transparent hover:text-white  hover:text-opacity-40 hover:duration-50 hover:ease-in-out hover:delay-5 "
                    href={
                      "https://www.linkedin.com/in/adarsh-kumar-dubey-12o05o04/"
                    }
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    className=" hover:shadow-sm hover:underline hover:underline-offset-2 hover:underline-transparent hover:text-white  hover:text-opacity-40 hover:duration-50 hover:ease-in-out hover:delay-5 "
                    href={"https://github.com/Adarshdu1"}
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    className=" hover:shadow-sm hover:underline hover:underline-offset-2 hover:underline-transparent hover:text-white  hover:text-opacity-40 hover:duration-50 hover:ease-in-out hover:delay-5 "
                    href={"https://twitter.com/CodeAdarsh"}
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    className=" hover:shadow-sm hover:underline hover:underline-offset-2 hover:underline-transparent hover:text-white  hover:text-opacity-40 hover:duration-50 hover:ease-in-out hover:delay-5 "
                    href={"https://www.instagram.com/itz_adarsh125/"}
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
