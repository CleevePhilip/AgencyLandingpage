import React from "react";
import TestimonialProfile from "../assets/testimonial-profile.png";
import star from "../assets/star.png";
const Testimonial = () => {
  return (
    <>
      <div className="flex justify-center w-full md:w-auto md:justify-end">
        <img
          src={TestimonialProfile}
          alt="profile"
          className="h-[164px] md:h-[200px]"
        />
      </div>
      <div className="w-full md:w-[30rem] text-center md:text-left lg:w-[45rem]">
        <ul className="flex justify-center md:justify-start gap-1">
          <li>
            <img src={star} className="h-[1.5rem]" />
          </li>
          <li>
            <img src={star} className="h-[1.5rem]" />
          </li>
          <li>
            <img src={star} className="h-[1.5rem]" />
          </li>
          <li>
            <img src={star} className="h-[1.5rem]" />
          </li>
          <li>
            <img src={star} className="h-[1.5rem]" />
          </li>
        </ul>
        <p className="text-lg font-bold leading-relaxed mt-4 md:mt-8">
          “OMG! I cannot believe that I have got a brand new landing page after
          getting Albino. It was super easy to edit and publish.”
        </p>

        <div className="flex justify-center md:justify-start gap-3 mt-3">
          <p className="text-sm font-bold">Franklin Hicks</p>
          <p className="text-sm"> Web Developer</p>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
