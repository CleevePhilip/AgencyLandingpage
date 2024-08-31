import React from "react";
import graphic from "../assets/graphic.png";
import webdev from "../assets/webdev.png";
import cowrite from "../assets/conwrite.png";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center gap-3 w-full md:w-[25rem]">
        <p className="font-semibold text-sm text-red-600">OUR SERVICES</p>
        <p className="font-bold text-xl">
          We provide great services for our customers based on needs
        </p>
      </div>

      <div className="flex flex-col items-center gap-5 mt-10 w-full md:flex-row md:justify-around md:w-auto text-white">
        <div className="card bg-[#68D585] w-full md:w-[20rem] shadow-xl p-5">
          <figure>
            <img src={graphic} alt="graphic-design" className="h-[10rem]" />
          </figure>
          <div className="card-body flex flex-col items-center">
            <h2 className="card-title">Graphic Design</h2>
            <p className="text-xs font-light text-center leading-relaxed">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
            <div className="card-actions justify-center mt-5">
              <a className="flex items-center justify-center gap-3">
                Learn More <FaArrowRightLong />
              </a>
            </div>
          </div>
        </div>

        <div className="card bg-[#407BFF] w-full md:w-[20rem] shadow-xl p-5">
          <figure>
            <img src={webdev} alt="web-dev" className="h-[10rem]" />
          </figure>
          <div className="card-body flex flex-col items-center">
            <h2 className="card-title">Web Development</h2>
            <p className="text-xs font-light text-center leading-relaxed">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
            <div className="card-actions justify-center mt-5">
              <a className="flex items-center justify-center gap-3">
                Learn More <FaArrowRightLong />
              </a>
            </div>
          </div>
        </div>

        <div className="card bg-[#FF7171] w-full md:w-[20rem] shadow-xl p-5">
          <figure>
            <img src={cowrite} alt="creative-writing" className="h-[10rem]" />
          </figure>
          <div className="card-body flex flex-col items-center">
            <h2 className="card-title">Content Writing</h2>
            <p className="text-xs font-light text-center leading-relaxed">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
            <div className="card-actions justify-center mt-5">
              <a className="flex items-center justify-center gap-3">
                Learn More <FaArrowRightLong />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
