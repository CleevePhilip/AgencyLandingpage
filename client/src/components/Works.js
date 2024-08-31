import React from "react";
import csBranding from "../assets/cs-branding.png";
import csMagazine from "../assets/cs-magazine.png";
import csWebdev from "../assets/cs-webdev.png";
import csPackaging from "../assets/cs-packaging.png";

const Works = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-5 gap-5 w-[30rem]">
        <p className="text-red-600 font-bold text-sm">CASE STUDIES</p>
        <p className=" text-3xl font-bold text-center">
          Our works describe why we are the best in the business
        </p>
      </div>

      <div className="flex justify-center items-center gap-5">
        <div className="flex flex-col">
          <div>
            <figure>
              <img src={csBranding} className="h-[540px]" />
            </figure>
            <p>Graphic Design</p>
            <p>Aura Branding Design</p>
          </div>
          <div>
            <figure>
              <img src={csWebdev} className="h-[346px]" />
            </figure>
            <p>Graphic Design</p>
            <p>Aura Branding Design</p>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <figure>
              <img src={csPackaging} className="h-[342px]" />
            </figure>
            <p>Graphic Design</p>
            <p>Aura Branding Design</p>
          </div>
          <div>
            <figure>
              <img src={csMagazine} className="h-[540px]" />
            </figure>
            <p>Graphic Design</p>
            <p>Aura Branding Design</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
