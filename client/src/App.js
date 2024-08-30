import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Home from "./components/Home";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Benefit from "./components/Benefit";

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

        <section className="flex justify-center items-center gap-10 p-[15rem] ">
          <Benefit />
        </section>
      </Main>
    </>
  );
};

export default App;
