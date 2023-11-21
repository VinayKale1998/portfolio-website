import React from "react";
import Socials from "../rudimentary/Socials";

function Footer() {
  return (
    <div className="relative  flex flex-col w-full h-[25vh] lg:h-[35vh] items-center justify-center opacity-[0.8]  overflow-hidden">
      <div className="flex   items-center  justify-center lg:justify-between  w-[95vw] md:w-[40vw] text-xs md:text-sm lg:text-md ">
        <h1 className="m-2 p-2 text-xl md:text-xl lg:text-2xl xl:text-4xl font-bold ">
          Vinay Kale
        </h1>
        <div className="flex flex-col m-2 space-y-3">
          {" "}
          <a className=" ">About Me</a>
          <a className="">Tech-Stack</a>
        </div>
        <div className="flex flex-col m-2 space-y-3">
          {" "}
          <a className="">Projects</a>
          <a className="">Contact Me</a>
        </div>
      </div>
      <Socials
        className="flex text-xl lg:text-2xl xl:text-3xl m-1  border-t w-[90vw] md:w-[40vw] items-center justify-center p-4"
        animate={false}
      ></Socials>
      <p className="text-[10px] lg:text-[1rem] opacity-[0.8]">
        © 2023 All rights reserved
      </p>
    </div>
  );
}

export default Footer;
