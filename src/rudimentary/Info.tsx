import TypingText from "./TypingText";
import Card from "./Card";
import { useEffect, useState } from "react";
import Portrait from "../assets/edited.png";
import Gradient from "./Gradient";
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
    <div className="relative flex   top-[11vh] md:top-[15vh] lg:top-[10vh] xl:top-[5vh]  left-0 md:left-20  w-[90vw]  ">
      <div className=" absolute top-[350px] lg:left-10 lg:bottom-10 md:top-auto  md:relative md:flex flex-col w-[90vw] md:w-[50vw] lg:w-[50vw] xl:w-[45vw]  justify-end">
        <Card className="text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold m-1 p-1 name  lg:top-10 ">
          Hello, I am
        </Card>
        <Card className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold m-1 p-1 name gradient-text   lg:top-10 ">
          Vinay Kale
        </Card>

        <TypingText
          text={currentText}
          key={currentIndex}
          style=" relative text-2xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-white left-2  font-bold  "
          staggerDuration={1}
        />
      </div>
      <div className="relative  overflow-hidden z-20  rounded-[50%]  shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] ">
        {/* <Gradient
          gradient="gradient-portrait"
          className="gradient-portrait  "
        ></Gradient> */}
        <img className="abs w-80 lg:w-82 xl:w-[600px]  " src={Portrait}></img>
      </div>
    </div>
  );
}

export default Info;
