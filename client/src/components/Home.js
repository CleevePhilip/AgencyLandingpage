import React from "react";
import hero from "../assets/hero.png";
import fillBlack from "../assets/fill-black.png";
import circle from "../assets/circle.png";
import wave from "../assets/wave.png";

const Home = () => {
  return (
    <>
      <div className="w-full md:w-[30rem] flex flex-col justify-center  items-center p-5 lg:items-start ">
        <p className="text-[#F64B4B] text-sm font-bold">
          LET'S SHIFT YOUR BUSINESS
        </p>
        <h1 className="font-bold text-3xl md:text-5xl mt-2">
          Shift your business fast with Shade Pro.
        </h1>
        <p className="text-sm md:text-base font-light mt-4">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next consultancy website within few minutes.
        </p>
        <button className="btn btn-primary mt-5">
          Get Started with the project
        </button>
      </div>

      <div className="w-full md:w-auto flex items-center justify-center relative">
        <img
          src={hero}
          alt="hero-img"
          className="h-[250px] md:h-[400px] z-10"
        />
        <img src={fillBlack} className="h-[109px] absolute top-0 left-0 z-0" />
        <img src={circle} className="h-[107px] absolute bottom-0 left-0 z-20" />
        <img src={wave} className="h-[80px] absolute bottom-5 right-10 z-20" />
      </div>
    </>
  );
};

export default Home;
