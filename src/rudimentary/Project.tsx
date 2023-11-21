import React, { type FC } from "react";
import { motion } from "framer-motion";
import Gradient from "./Gradient";

interface ProjectProps {
  src: string;
  title: string;
  description: string;
}

const Project: FC<ProjectProps> = ({
  src,
  title,
  description,
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
      className=" relative BusChilli flex justify-between  border p-1 m-1 w-[90vw] md:w-[80vw] lg:w-[60vw] xl:w-[50vw]  rounded-md h-[30vh] z-30 "
    >
      <Gradient
        gradient="gradient-project"
        className=" absolute gradient z-20"
      ></Gradient>{" "}
      <div className="relative flex flex-col items-center border rounded-lg  w-[50%]">
        <h1 className=" p-1 m-1 text-xl md:text-2xl lg:text-3xl xl:text-3xl">
          {title}
        </h1>
        <p className=" p-1 m-1"> {description}</p>
      </div>
      <div className="relative  flex  ProjectDefinitions border w-[25%]">
        <img src={src} className="w-full" />
      </div>
    </motion.div>
  );
};

export default Project;
