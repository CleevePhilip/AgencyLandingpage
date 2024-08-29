import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import hero from "./assets/hero.png";

const App = () => {
  return (
    <>
      {" "}
      <Nav />
      <Main>
        <section className="flex justify-center gap-[11rem] items-center ">
          <div className="w-96 h-full">
            <p>LET'S SHIFT YOUR BUSINESS</p>
            <h1>Shift your business with Shade Pro.</h1>
            <p>
              With lots of unique blocks, you can easily build a page without
              coding. Build your next consultancy website within few minutes.
            </p>
            <button className="btn btn-primary">
              Get Started with the project
            </button>
          </div>
          <div>
            <img src={hero} alt="hero-img" className="h-[436px]" />
          </div>
        </section>
      </Main>
    </>
  );
};

export default App;
