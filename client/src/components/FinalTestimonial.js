import React from "react";
import testimonialPic from "../assets/testimonial-pic.png";

const FinalTestimonial = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col m-10 p-10 gap-[5rem]">
        <div className="flex justify-center items-center gap-5 flex-col w-[50rem]">
          <p className="text-[13px] uppercase font-light">Testimonial</p>
          <p className="text-[32px] font-bold text-center">
            “Simply the best. Better than all the rest. I’d recommend this
            product to beginners and advanced users.”
          </p>
        </div>

        <div className="flex justify-center items-center flex-col gap-3">
          <figure>
            <img src={testimonialPic} alt="profile" className="h-[76px]" />
          </figure>
          <div className="flex justify-center items-center flex-col ">
            <p className="font-bold text-sm">Ian Klein</p>
            <p className="text-sm font-light">Digital Marketer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalTestimonial;
