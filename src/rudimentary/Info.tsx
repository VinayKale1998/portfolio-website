import TypingText from "./TypingText";
import Card from "./Card";
import { useEffect, useState } from "react";

const skills: string[] = ["Full-Stack Web Developer", "SDET", "Problem Solver"];

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
    <div className="absolute flex flex-col  top-[15vh] md:top-[20vh]  left-0 md:left-10 ">
      <TypingText
        text={currentText}
        key={currentText}
        style="text-lg md:text-xl  lg:text-3xl xl:text-4xl 2xl:text-5xl gradient-text  font-bold"
        className=" gradient-text"
        staggerDuration={1}
      />
      <Card className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold m-1 p-1 name relative top-56 lg:top-10">
        Vinay Kale
      </Card>
    </div>
  );
}

export default Info;
