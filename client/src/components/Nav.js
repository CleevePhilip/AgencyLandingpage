import React from "react";

const Nav = () => {
  return (
    <>
      <nav className=" flex justify-around p-5">
        <ul className="flex justify-center items-center gap-5 text-sm">
          <li>
            <h1 className="font-bold text-base">Brainwave.io</h1>
          </li>
          <li>
            <a>Home</a>
          </li>{" "}
          <li>
            <a>About</a>
          </li>{" "}
          <li>
            <a>Benefit</a>
          </li>{" "}
          <li>
            <a>Offers</a>
          </li>
        </ul>
        <button className="btn btn-primary btn-xl">
          Get Started a project
        </button>
      </nav>
    </>
  );
};

export default Nav;
