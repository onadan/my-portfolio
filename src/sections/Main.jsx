import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const Main = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <main className="relative z-10">
        {/* design elements */}

        <div id="el1"></div>
        <div id="el3"></div>
        <div id="el2"></div>

        {/* end of design element */}

        <div className="min-h-[400px] px-5 sm:px-[4rem] text-gray-200">
          <div className="flex justify-end py-4">
            <div className="my-4 border rounded-full w-max p-4 text-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </div>
          </div>

          <div className="w-full max-w-[800px] mx-auto pt-[7rem] overflow-hidden pb-20">
            <p className="text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[7rem] font-bold py-2 leading-10 text-transparent bg-clip-text bg-gradient-to-r from-grad1 to-grad2 w-max">
              I'm Daniel.
            </p>

            {/* <p className="text-xl sm:text-2xl font-bold pb-4">
              a frontend developer
            </p> */}

            <p className="text-xl sm:text-2xl font-light my-2 max-w-[30rem] mb-10">
              I'm a frontend developer. I'm passionate about bringing ideas to
              life and making user experience on the web smooth.
            </p>

            <div className="flex mt-3 w-max border-slate-400 rounded-xl items-center border">
              <a
                href="https://twitter.com/1DanielOnaolapo"
                target="_blank"
                rel="noreferrer"
                className="p-2"
              >
                <AiFillTwitterCircle size={30} />
              </a>
              <a
                href="https://github.com/onadan"
                target="_blank"
                rel="noreferrer"
                className="p-2"
              >
                <AiFillGithub size={30} />
              </a>
              <a
                href="https://linkedin.com/in/daniel-onaolapo"
                target="_blank"
                rel="noreferrer"
                className="p-2"
              >
                <AiFillLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
