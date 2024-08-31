import React from "react";

const Works = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-5 gap-5 w-[30rem]">
        <p className="text-red-600 font-bold text-sm">CASE STUDIES</p>
        <p className=" text-3xl font-bold text-center">
          Our works describe why we are the best in the business
        </p>
      </div>

      <div>
        <div>
          <div>
            <figure>
              <img />
            </figure>
            <p>Graphic Design</p>
            <p>Aura Branding Design</p>
          </div>
          <div>
            <figure>
              <img />
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
