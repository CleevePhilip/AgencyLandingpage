import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col  ">
        <div className="p-10 lg:m-10 flex justify-center items-center flex-col lg:flex-row lg:gap-[25rem]">
          <div className=" lg:w-[35rem] flex gap-5 flex-col">
            <p className="text-[32px] font-bold">
              Ready to launch your next project?
            </p>
            <p className="text-sm font-light leading-relaxed lg:w-[25rem]">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
          <button className="btn btn-primary">Ready launch now</button>
        </div>
      </div>
      <div className="flex justify-center flex-col lg:flex-row items-center lg:gap-[5rem] lg:w-[75%]">
        <div className="w-[15rem] h-[15rem] flex flex-col gap-3 mb-2">
          <p className="text-xl font-bold">Brainwave.io</p>
          <p className="font-light text-xs  leading-relaxed">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
          <ul className="flex justify-start items-center gap-3">
            <li>
              <i>
                <FaXTwitter />
              </i>
            </li>
            <li>
              <i>
                {" "}
                <i>
                  <IoLogoFacebook />
                </i>
              </i>
            </li>
            <li>
              <i>
                <FaInstagram />
              </i>
            </li>{" "}
            <li>
              <i>
                <FaLinkedin />
              </i>
            </li>
          </ul>
        </div>
        <div className="w-[15rem] h-[15rem]">
          <p className="font-light text-sm">Company</p>
          <ul className="flex flex-col gap-2 mt-5 text-sm">
            <li>About us</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div className=" w-[15rem] h-[15rem]">
          <p className="font-light text-sm">Product</p>{" "}
          <ul className="flex flex-col gap-2 mt-5 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>News </li>
            <li>Help Desk</li>
            <li>Support</li>
          </ul>
        </div>
        <div className=" w-[15rem] h-[15rem]">
          <p className="font-light text-sm">Services</p>{" "}
          <ul className="flex flex-col gap-2 mt-5 text-sm">
            <li>Digital Marketing</li>
            <li>Content Writing</li>
            <li>SEO for Business</li>
            <li>UI Design</li>
          </ul>
        </div>
        <div className=" w-[15rem] h-[15rem]">
          <p className="font-light text-sm">Legal</p>{" "}
          <ul className="flex flex-col gap-2 mt-5 text-sm">
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
