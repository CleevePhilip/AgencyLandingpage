import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import csBranding from "../assets/cs-branding.png";
import csMagazine from "../assets/cs-magazine.png";
import csWebdev from "../assets/cs-webdev.png";
import csPackaging from "../assets/cs-packaging.png";

const Works = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center m-[5rem] gap-5 w-[30rem]">
        <p className="text-red-600 font-bold text-sm">CASE STUDIES</p>
        <p className=" text-3xl font-bold text-center">
          Our works describe why we are the best in the business
        </p>
      </div>

      <div className="flex justify-center items-center gap-[3rem]">
        <div className="flex flex-col">
          <div>
            <figure>
              <img src={csBranding} className="h-[540px] w-[500px]" />
            </figure>
            <div className="p-5 flex flex-col gap-3">
              <p className="text-sm font-light">Graphic Design</p>
              <p className="text-lg font-bold">Aura Branding Design</p>
            </div>
          </div>
          <div>
            <figure>
              <img src={csWebdev} className="h-[346px] w-[500px]" />
            </figure>
            <div className="p-5 flex flex-col gap-3">
              <p className="text-sm font-light">Graphic Design</p>
              <p className="text-lg font-bold">AB.S Snack Packaging</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <figure>
              <img src={csPackaging} className="h-[346px] w-[500px]" />
            </figure>
            <div className="p-5 flex flex-col gap-3">
              <p className="text-sm font-light">Web Development</p>
              <p className="text-lg font-bold">Gradient Website Development</p>
            </div>
          </div>
          <div>
            <figure>
              <img src={csMagazine} className="h-[540px]" />
            </figure>
            <div className="p-5 flex flex-col gap-3">
              <p className="text-sm font-light">Content Writing</p>
              <p className="text-lg font-bold">Magazine Content Writing</p>
            </div>
          </div>
        </div>
      </div>
      <a className="flex items-center justify-center gap-3 m-10 p-10 text-[#473BF0] text-lg">
        See all Works <FaArrowRightLong className="text-[#473BF0]" />
      </a>
    </>
  );
};

export default Works;
