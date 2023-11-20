import { motion } from "framer-motion";
// import { staggerContainer, imageVariant } from "../utils/motionVariants";
// import { StaggerVariant } from "../utils/motionTypes";
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
import Gradient from "../rudimentary/Gradient";

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

  return (
    <div className=" relative flex flex-col  items-center   z-10 ">
      <h1 className="text-3xl md:text-xl  lg:text-3xl xl:text-5xl 2xl:text-6xl mx-10 my-10">
        My Tech-Stack
      </h1>
      <Gradient
        gradient="gradient-normal"
        className="gradient-local"
      ></Gradient>
      <div className=" tech-stack relative m-auto  grid grid-cols-3 md:grid-cols-5 gap-8  lg:gap-20 items-center justify-center overflow-hidden z-10">
        {locations.map((src, index) => (
          <motion.img
            initial={{ opacity: 0, translateX: 50 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true, amount: 0.35 }}
            key={src}
            src={src}
            alt={`image-${index}`}
            className="w-20 md:w-24 lg:w-20 xl:w-32 mx-4 p-2 col-span-1"
          />
        ))}
      </div>
    </div>
  );
}

export default TechStack;
