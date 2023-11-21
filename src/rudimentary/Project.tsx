import React, { type FC } from "react";
import { motion } from "framer-motion";
import Gradient from "./Gradient";

interface ProjectProps {
  src: string;
  title: string;
  description: string;
  link: string;
}

const Project: FC<ProjectProps> = ({
  src,
  title,
  description,
  link,
}: ProjectProps) => {
  const childVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transistion: {
        type: "tween",
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      variants={childVariants}
      className=" relative BusChilli flex justify-start  border p-2 m-2  rounded-md  h-auto z-30 bg-black overflow-hidden "
    >
      <Gradient
        gradient="gradient-project"
        className=" absolute gradient z-20"
      ></Gradient>{" "}
      <div className="relative flex flex-col items-center  rounded-lg  w-[75vw] md:w-[65vw] lg:w-[35vw] xl:w-[25vw] space-y-2">
        <h1 className=" p-1 m-1 text-xl md:text-2xl lg:text-3xl xl:text-3xl flex font-bold ">
          {" "}
          {title}
        </h1>
        <div className="relative  flex  ProjectDefinitions  md:hidden   ">
          <a target="new">
            <img src={src} className=" w-40 h-40 rounded-md object-center" />
          </a>
        </div>
        <p className=" leading-[15px] text-xs md:text-md lg:text-lg xl:text-xl   justify-center w-[75%] lg:w-[80%] ">
          {" "}
          {description}
          <span className="font-italic font-bold">
            &nbsp; Link will be updated shortly :&#41;
          </span>
        </p>
      </div>
      <div className="hidden md:flex relative    ProjectDefinitions  ">
        <a target="new">
          {" "}
          <img
            src={src}
            className=" md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-[250px] xl:h-[250px] rounded-md "
          />
        </a>
      </div>
    </motion.div>
  );
};

export default Project;
