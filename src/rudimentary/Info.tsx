import TypingText from "./TypingText";
import Card from "./Card";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills: string[] = ["MERN-Stack Developer", "SDET", "Problem Solver"];

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
    <div className="absolute flex flex-col  top-[50vh] md:top-[20vh]  left-0 md:left-10  ">
      <Card className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold m-1 p-1 name gradient-text   lg:top-10 ">
        Vinay Kale
      </Card>
      <Card className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold m-1 p-1 name  lg:top-10 ">
        I'm a
      </Card>
      <TypingText
        text={currentText}
        key={currentIndex}
        style=" relative text-2xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-white left-1  font-bold"
        className=" gradient-text"
        staggerDuration={1}
      />
    </div>
  );
}

export default Info;
