import React from "react";

const Nav = () => {
  return (
    <>
      <div className="container flex justify-center items-center">
        <div className="navbar flex justify-between items-center bg-base-100 lg:w-[68%] lg:gap-[10rem]  mr-5 lg:mr-0">
          {" "}
          <div className="dropdown lg:hidden navbar-start ">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Benefit</a>
              </li>
              <li>
                <a>Offers</a>
              </li>
            </ul>
          </div>
          <div className="navbar-start hidden lg:block">
            <h1 className="font-bold text-base">Brainwave.io</h1>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-5 text-sm">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Benefit</a>
              </li>
              <li>
                <a>Offers</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end ">
            <button className="btn btn-primary btn-outline btn-xl ">
              Get Started a project
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
