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
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-red-400 w-[15rem] h-[15rem]">
          <p>Brainwave.io</p>
          <p>
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>
        <div className="bg-red-400 w-[15rem] h-[15rem]">
          <p>Company</p>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="bg-red-400 w-[15rem] h-[15rem]">
          <p>Product</p>{" "}
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>News </li>
            <li>Help Desk</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="bg-red-400  w-[15rem] h-[15rem]">
          <p>Services</p>{" "}
          <ul>
            <li>Digital Marketing</li>
            <li>Content Writing</li>
            <li>SEO for Business</li>
            <li>UI Design</li>
          </ul>
        </div>
        <div className="bg-red-400  w-[15rem] h-[15rem]">
          <p>Legal</p>{" "}
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
            <li>SEO for Business</li>
            <li>Return Policy</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
