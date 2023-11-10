import React from "react";

export default function Education() {
  return (
    <div className="bg-[#e9e9f1] bg-opacity-70">
      <div id="education" className="min-h-screen max-w-7xl mx-auto">
        <div className="text-center text-5xl font-semibold p-10 mb-10">
          EDUCATION
        </div>
        <div className="lg:grid lg:grid-cols-2 pb-20">
          <div className="">
            <div className="">
              <iframe
                src="https://www.nitp.ac.in/"
                className="overflow-hidden h-96 w-full"
              ></iframe>
            </div>
            <div className="mt-10">
              <div className="flex h-96 items-center justify-center">
                <div className="">
                  <h1 className="text-2xl font-semibold">INTERMEDIATE</h1>
                  <hr className="mb-5 border-gray-800" />
                  <div>
                    <b className="text-xl uppercase">
                      12<sup>th</sup> Board, CBSE
                    </b>
                  </div>
                  <div className="uppercase">Harihar Public School</div>
                  <div className="uppercase">
                    Stream: Science with Mathematics
                  </div>
                  <div className="uppercase">Year: 2019 - 2021</div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <iframe
                src="https://chandrabhaniajnp.com/"
                className="overflow-hidden h-96 w-full"
              ></iframe>
            </div>
          </div>
          <div className="">
            <div className="flex h-96 items-center justify-center">
              <div className="">
                <h1 className="text-2xl font-semibold">GRADUATION</h1>
                <hr className="mb-5 border-gray-800" />
                <div>
                  <b className="text-xl uppercase">
                    Bachelor&apos;s of Technology
                  </b>
                </div>
                <div className="uppercase">
                  National Institute of Technology, Patna
                </div>
                <div className="uppercase">
                  Branch: Computer Science and Engineering
                </div>
                <div className="uppercase">Year: 2021 - 2025</div>
              </div>
            </div>
            <div className="mt-10">
              <iframe
                src="https://hariharsinghpublicschool.in/"
                className="overflow-hidden h-96 w-full"
              ></iframe>
            </div>
            <div className="mt-10">
              <div className="flex h-96 items-center justify-center">
                <div className="">
                  <h1 className="text-2xl font-semibold">MATRICULATION</h1>
                  <hr className="mb-5 border-gray-800" />
                  <div>
                    <b className="text-xl uppercase">
                      10<sup>th</sup> Board, CBSE
                    </b>
                  </div>
                  <div className="uppercase">C.B. Internation Academy</div>
                  <div className="uppercase">Year: 2019 - 2021</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
