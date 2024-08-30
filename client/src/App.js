import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import hero from "./assets/hero.png";
import graphic from "./assets/graphic.png";
import webdev from "./assets/webdev.png";
import cowrite from "./assets/conwrite.png";
import { FaArrowRightLong } from "react-icons/fa6";
import TestimonialProfile from "./assets/testimonial-profile.png";
import star from "./assets/star.png";

const App = () => {
  return (
    <>
      <Nav />
      <Main>
        <section className="flex flex-col items-center gap-5 md:flex-row md:justify-center md:gap-20 md:items-center">
          <div className="w-full md:w-[30rem]">
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
          <div className="w-full md:w-auto">
            <img src={hero} alt="hero-img" className="h-[250px] md:h-[400px]" />
          </div>
        </section>

        <section className="flex flex-col items-center mt-10 p-5 md:mt-16 md:p-10">
          <div className="flex flex-col items-center text-center gap-3 w-full md:w-[25rem]">
            <p className="font-semibold text-sm text-red-600">OUR SERVICES</p>
            <p className="font-bold text-xl">
              We provide great services for our customers based on needs
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 mt-10 w-full md:flex-row md:justify-around md:w-auto">
            <div className="card bg-[#68D585] w-full md:w-[20rem] shadow-xl p-5">
              <figure>
                <img src={graphic} alt="graphic-design" className="h-[10rem]" />
              </figure>
              <div className="card-body flex flex-col items-center">
                <h2 className="card-title">Graphic Design</h2>
                <p className="text-xs font-light text-center leading-relaxed">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
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
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
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
                <img
                  src={cowrite}
                  alt="creative-writing"
                  className="h-[10rem]"
                />
              </figure>
              <div className="card-body flex flex-col items-center">
                <h2 className="card-title">Content Writing</h2>
                <p className="text-xs font-light text-center leading-relaxed">
                  With lots of unique blocks, you can easily build a page
                  without coding. Build your next landing page.
                </p>
                <div className="card-actions justify-center mt-5">
                  <a className="flex items-center justify-center gap-3">
                    Learn More <FaArrowRightLong />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-center items-center gap-[5rem] ">
          <div>
            <img src={TestimonialProfile} alt="profile" className="h-[164px]" />
          </div>
          <div className="w-[50%]">
            <ul className="flex gap-1">
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
            <p className="text-lg font-bold leading-relaxed mt-10">
              “OMG! I cannot believe that I have got a brand new landing page
              after getting Albino. It was super easy to edit and publish.”
            </p>

            <div className="flex gap-3 mt-3">
              <p className="text-sm font-bold">Franklin Hicks</p>
              <p className="text-sm"> Web Developer</p>
            </div>
          </div>
        </section>
      </Main>
    </>
  );
};

export default App;
