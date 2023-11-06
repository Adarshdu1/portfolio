"use client";
import React from "react";
import { Link } from "react-router-dom";
export default function Project() {
  return (
    <div className="bg-[#e9e9f1] bg-opacity-70">
      <div id="project" className="min-h-screen max-w-7xl mx-auto">
        <div className="text-center text-5xl font-semibold p-10 mb-10">
          PERSONAL PROJECTS
        </div>
        <div className="lg:grid lg:grid-cols-2 pb-20">
          <div className="">
            <div className="">
              <iframe
                src="https://findyourden.vercel.app/"
                className="overflow-hidden h-96 w-full"
              ></iframe>
            </div>
            <div className="mt-10">
              <div className="flex h-96 items-center justify-center">
                <div className="">
                  <h1 className="text-2xl font-bold">MOVIEREVIEWS</h1>
                  <hr className="mb-5 border-gray-800" />
                  <p>
                    <p className="font-semibold text-xl uppercase">
                      Inspired by IMDB, for movie reviews.
                    </p>
                  </p>
                  <p className="uppercase">
                    <b>Tech Stack: </b>
                    Next.js, TMDB API, and Tailwind CSS
                  </p>
                  <div className="mt-3 flex justify-between items-center">
                    <div className="space-x-5">
                      <button className="p-3 rounded-lg bg-red-500 hover:bg-red-600 active:bg-red-700 text-white w-20">
                        <Link to={"https://github.com/Adarshdu1/IMDb"}>
                          CODE
                        </Link>
                      </button>
                      <button className="p-3 rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white w-20">
                        <Link to={"https://movie-reviews-next.vercel.app/"}>
                          LIVE
                        </Link>
                      </button>
                    </div>
                    <div className="uppercase">July, 2023</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <iframe
                src="https://vitecast.vercel.app/"
                className="overflow-hidden h-96 w-full"
              ></iframe>
            </div>
          </div>
          <div className="">
            <div className="flex h-96 items-center justify-center">
              <div className="">
                <h1 className="text-2xl font-bold">FINDYOURDEN</h1>
                <hr className="mb-5 border-gray-800" />
                <p>
                  <p className="font-semibold text-xl uppercase">
                    Renting and buying house made easy.
                  </p>
                </p>
                <p className="uppercase">
                  <b>Tech Stack: </b>
                  React.js, Firebase, and Tailwind CSS
                </p>
                <div className="mt-3 flex justify-between items-center">
                  <div className="space-x-5">
                    <button className="p-3 rounded-lg bg-red-500 hover:bg-red-600 active:bg-red-700 text-white w-20">
                      <Link to={"https://github.com/Adarshdu1/Realtor-Clone"}>
                        CODE
                      </Link>
                    </button>
                    <button className="p-3 rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white w-20">
                      <Link to={"https://findyourden.vercel.app/"}>LIVE</Link>
                    </button>
                  </div>
                  <div className="uppercase">June, 2023</div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <iframe
                src="https://movie-reviews-next.vercel.app/"
                className="overflow-hidden h-96 w-full"
              ></iframe>
            </div>
            <div className="mt-10">
              <div className="flex h-96 items-center justify-center">
                <div className="">
                  <h1 className="text-2xl font-bold">VITECAST</h1>
                  <hr className="mb-5 border-gray-800" />
                  <p>
                    <p className="font-semibold text-xl uppercase">
                      A weather forecasting web application.
                    </p>
                  </p>
                  <p className="uppercase">
                    <b>Tech Stack: </b>
                    React.js, Vite.js, and Tailwind CSS
                  </p>
                  <div className="mt-3 flex justify-between items-center">
                    <div className="space-x-5">
                      <button className="p-3 rounded-lg bg-red-500 hover:bg-red-600 active:bg-red-700 text-white w-20">
                        <Link to={"https://github.com/Adarshdu1/vitecast"}>
                          CODE
                        </Link>
                      </button>
                      <button className="p-3 rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white w-20">
                        <Link to={"https://vitecast.vercel.app/"}>LIVE</Link>
                      </button>
                    </div>
                    <div className="uppercase">August, 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
