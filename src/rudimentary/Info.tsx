import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motionVariants";
import TypingText from "./TypingText";
import Card from "./Card";
import { useEffect, useState } from "react";

const skills: string[] = [
  "Full-Stack Web Developer",
  "Software Development Engineer in Test",
  "Problem Solver",
];

function Info() {
  const [currentText, setCurrentText] = useState(skills[0]);
  const [currentIndex, setIndex] = useState(0);

  useEffect(() => {
    const intervalId: number = setInterval(() => {
      setIndex((prev: number) => {
        const nextIndex = (prev + 1) % skills.length;
        setCurrentText(skills[nextIndex]);
        return nextIndex;
      });
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [skills]);

  return (
    <div className="absolute flex flex-col  top-[10vh] md:top-[20vh] left-10 ">
      {/* <TypingText
        text="Full-Stack "
        style="text-lg md:text-xl   lg:text-2xl xl:text-3xl 2xl:text-4xl  "
        className=" "
        staggerDuration={2}
      />

      <TypingText
        text=" Web Developer"
        style="text-lg md:text-xl   lg:text-2xl xl:text-3xl 2xl:text-4xl "
        className="  "
        staggerDuration={8}
      /> */}
      <TypingText
        text={currentText}
        key={currentText}
        style="text-lg md:text-xl  lg:text-3xl xl:text-4xl 2xl:text-4xl gradient-text  font-bold"
        className=" "
        staggerDuration={1}
      />
      <Card className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold m-1 p-1 name relative top-56 lg:top-10">
        Vinay Kale
      </Card>
    </div>
  );
}

export default Info;
