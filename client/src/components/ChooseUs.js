import React from "react";
import wcuProject from "../assets/wcu-project.png";
import wcuTask from "../assets/wcu-task.png";
import wcuFeedback from "../assets/wcu-feedback.png";
import wcuDeadline from "../assets/wcu-deadline.png";

const ChooseUs = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 w-96">
        <p className="text-sm text-red-600 font-bold uppercase">
          Why choose us
        </p>
        <p className="font-bold text-2xl text-center">
          People choose us because we serve the best for everyone
        </p>
      </div>

      <div className="grid lg:grid-cols-2 lg:grid-rows-2 justify-center items-center gap-[5rem] grid-cols-1 grid-rows-4  mt-10 ">
        <div className="w-96 flex justify-center items-center gap-5">
          <figure>
            <img src={wcuProject} alt="project" />
          </figure>
          <div className="flex flex-col gap-3 ">
            <p className="text-md font-bold">Dedicated project manager</p>
            <p className="text-sm font-base leading-relaxed">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
        </div>

        <div className="w-96 flex justify-center items-center gap-5">
          <figure>
            <img src={wcuTask} alt="project" />
          </figure>
          <div className="flex flex-col gap-3">
            <p className="text-md font-bold">Dedicated project manager</p>
            <p className="text-sm font-base leading-relaxed">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
        </div>

        <div className="w-96 flex justify-center items-center gap-5">
          <figure>
            <img src={wcuFeedback} alt="project" />
          </figure>
          <div className="flex flex-col gap-3">
            <p className="text-md font-bold">Dedicated project manager</p>
            <p className="text-sm font-base leading-relaxed">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
        </div>

        <div className="w-96 flex justify-center items-center gap-5">
          <figure>
            <img src={wcuDeadline} alt="project" />
          </figure>
          <div className="flex flex-col gap-3">
            <p className="text-md font-bold">Dedicated project manager</p>
            <p className="text-sm font-base leading-relaxed">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
