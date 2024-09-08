import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Home from "./components/Home";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Benefit from "./components/Benefit";
import CustomerStats from "./components/CustomerStats";
import ChooseUs from "./components/ChooseUs";
import CtaFinal from "./components/CtaFinal";
import Works from "./components/Works";
import FinalTestimonial from "./components/FinalTestimonial";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Main>
        <section className="flex flex-col items-center gap-5 md:flex-row md:justify-center md:gap-20 md:items-center mt-10 md:mt-20">
          <Home />
        </section>

        <section className="flex flex-col items-center gap-5 mt-10 md:mt-20 p-5 md:p-10">
          <About />
        </section>

        <section className="flex flex-col items-center md:flex-row justify-between md:justify-center gap-5 md:gap-20 p-5 md:p-10 mt-10 md:mt-20">
          <Testimonial />
        </section>

        <section className="flex justify-center flex-col lg:flex-row  items-center gap-10 mt-10 p-10">
          <Benefit />
        </section>

        <section className="flex flex-col items-center justify-between md:flex-row lg:flex-row lg:justify-center lg:gap-[10rem] lg:mt-10  ">
          <CustomerStats />
        </section>

        <section className="flex flex-col justify-center items-center mt-10 p-10 bg-[#F4F7FA]">
          <ChooseUs />
        </section>

        <section className="flex flex-col md:flex-row lg:flex-row justify-center items-center p-10  bg-[#F4F7FA] gap-3 lg:gap-[12rem] border-t-slate-300 ">
          <CtaFinal />
        </section>

        <section className="flex flex-col justify-center items-center mt-10 p-10">
          <Works />
        </section>

        <section className="flex justify-center items-center mt-10 p-10 bg-[#473BF0] text-white">
          <FinalTestimonial />
        </section>
      </Main>
      <footer className="container flex flex-col justify-center items-center bg-[#161C2D] text-white">
        <Footer />
      </footer>
    </>
  );
};

export default App;
