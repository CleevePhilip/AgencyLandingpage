import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col ">
        <div className="p-10 m-10 flex justify-center items-center gap-[25rem]">
          <div className=" w-[35rem] flex gap-5 flex-col">
            <p className="text-[32px] font-bold">
              Ready to launch your next project?
            </p>
            <p className="text-sm font-light leading-relaxed w-[25rem]">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
          <button className="btn btn-primary">Ready launch now</button>
        </div>

        <div className="flex justify-between items-center gap-[5rem] p-10 m-10">
          <div className="flex flex-col w-[18rem] gap-3">
            <p className="font-bold text-[28px]">Brainwave.io</p>
            <p className="font-light text-sm">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>

          <div className="flex flex-col w-[18rem] gap-3">
            <p className="text-sm font-light">Company</p>
            <ul className="text-sm flex flex-col gap-1">
              <li>About us</li>
              <li>Contact us </li>
              <li>Careers </li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <p>Company</p>
            <ul>
              <li>About us</li>
              <li>Contact us </li>
              <li>Careers </li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <p>Company</p>
            <ul>
              <li>About us</li>
              <li>Contact us </li>
              <li>Careers </li>
              <li>Press</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
