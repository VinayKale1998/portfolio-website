import { type StaggerVariant } from "./motionTypes";
import { Ease } from "./motionTypes";

const staggerContainer = (i: number): StaggerVariant => {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: i * 0.1,
      },
    },
  };
};

const textVariant: StaggerVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: Ease.spring,
      ease: Ease.easeIn,
    },
  },
};

const imageVariant = (
  direction: string,
  type: string,
  delay: number,
  duration: number
): StaggerVariant => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? "-10vw" : direction === "right" ? "10vw" : 0,
      y: direction === "up" ? "10vw" : direction === "down" ? "-10vw" : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        ease: Ease.easeOut,
        type,
        duration,
        delay,
      },
    },
  };
};

export { staggerContainer, textVariant, imageVariant };
