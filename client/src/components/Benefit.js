import React from "react";
import storyImg1 from "../assets/story-img1.png";
import storyImg2 from "../assets/story-img2.png";
import storyImg3 from "../assets/story-img3.png";

const Benefit = () => {
  return (
    <>
      <div className="flex h-full justify-between  flex-col w-[30rem] gap-5">
        <div className="flex flex-col gap-5">
          <p className="text-xs font-bold text-red-600">OUR STORY</p>
          <p className="text-xl font-bold">
            We know how everything works and why your business is failing over
            and over again.
          </p>{" "}
        </div>
        <div className="mt-20">
          <img
            src={storyImg1}
            alt="story-profile"
            className="h-[500px] w-[400px]"
          />
        </div>{" "}
      </div>

      <div className="flex w-[50%]h-full ">
        <div className="flex flex-col gap-10 ">
          <div className="flex justify-center items-center gap-10 mt-[3rem]">
            <img src={storyImg2} alt="story-profile" className="h-[332px]" />{" "}
            <img src={storyImg3} alt="story-profile" className="h-[167px]" />
          </div>
          <div className="w-[20rem]  ">
            <p className="text-sm font-light text-left leading-relaxed ">
              We share common trends and strategies for improving your rental
              income and making sure you stay in high demand. With lots of
              unique blocks, you can easily build a page without coding. Build
              your next landing page.
            </p>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Benefit;
