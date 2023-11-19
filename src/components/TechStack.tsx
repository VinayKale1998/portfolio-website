import { motion, stagger } from "framer-motion";
import {
  staggerContainer,
  imageVariant,
  textContainer,
} from "../utils/motionVariants";
import { StaggerVariant, StateValues } from "../utils/motionTypes";
import { ReactNode } from "react";
import ReactLogo from "../assets/react.svg";
import JSLogo from "../assets/javascript.svg";
import TSLogo from "../assets/typescript.svg";
import NodeLogo from "../assets/node-js.svg";
import ExpressLogo from "../assets/express.svg";
import MongoLogo from "../assets/mongodb.svg";
import GithubLogo from "../assets/github.svg";
import AWSLogo from "../assets/aws.svg";
import DockerLogo from "../assets/docker.svg";
import RedisLogo from "../assets/redis.svg";

function TechStack() {
  const locations: string[] = [
    ReactLogo,
    JSLogo,
    TSLogo,
    NodeLogo,
    ExpressLogo,
    MongoLogo,
    GithubLogo,
    AWSLogo,
    DockerLogo,
    RedisLogo,
  ];

  const containerVariants: StaggerVariant = staggerContainer(1);
  return (
    <div className=" flex flex-col  items-center ">
      <h1 className="text-lg md:text-xl  lg:text-3xl xl:text-4xl 2xl:text-4xl">
        My Tech Stack
      </h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="relative m-5 p-2  grid grid-cols-3 lg:grid-cols-5  gap-4 items-center justify-center overflow-hidden"
      >
        {locations.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`image-${index}`}
            className="w-16 md:w-15 lg:w-20 xl:w-32 mx-4 p-2 col-span-1"
            variants={imageVariant("down", "tween", 0.1, 2)}
            initial="hidden"
            animate="show"
          />
        ))}
      </motion.div>
    </div>
  );
}

export default TechStack;
