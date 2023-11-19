import { motion } from "framer-motion";
import { type FC } from "react";
import { ReactNode } from "react";
import { staggerContainer, textVariant } from "../utils/motionVariants";
import { StateValues } from "../utils/motionTypes";

type TypingTextProps = {
  text: string;
  style?: string;
  children?: ReactNode;
  className?: string;
  staggerDuration?: number;
};
const TypingText: FC<TypingTextProps> = ({
  text,
  style,
  className,
}: TypingTextProps) => {
  const textContainerVariants = staggerContainer(1);
  return (
    <motion.p
      variants={textContainerVariants}
      className={className}
      initial={StateValues.hidden}
      whileInView={StateValues.show}
    >
      {Array.from(text).map((char, index) => {
        return (
          <motion.span variants={textVariant} key={index} className={style}>
            {char}
          </motion.span>
        );
      })}
    </motion.p>
  );
};

export default TypingText;
