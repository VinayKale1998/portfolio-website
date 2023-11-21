import { motion, useInView } from "framer-motion";
import Card from "../rudimentary/Card";
import Gradient from "../rudimentary/Gradient";
import { useRef } from "react";
function Projects() {
  const animateref = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(animateref, { once: false, amount: 0.1 });

  const parentVariants = {
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

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
      id="#section-projects"
      className="relative flex flex-col min-h-[100vh] m-1 p-1 items-center overflow-hidden z-30"
    >
      <Gradient
        className="gradient-normal"
        gradient="gradient-projects"
      ></Gradient>
      <Card className="Projects-Title text-3xl md:text-3xl lg:text-4xl xl:text-6xl p-2 m-2">
        PROJECTS
      </Card>
      <motion.div
        ref={animateref}
        className="grid grid-row-3 p-2 m-2  "
        variants={parentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div
          variants={childVariants}
          className="BusChilli border p-1 m-1 w-[90vw] md:w-[80vw] lg:w-[60vw] xl:[50vw] 2xl:[30vw] rounded-md h-[28vh] "
        >
          {" "}
          Bus
        </motion.div>
        <motion.div
          variants={childVariants}
          className="WebChat border  p-1 m-1 w-[90vw] md:w-[80vw] lg:w-[60vw] xl:[50vw] 2xl:[30vw] rounded-md h-[28vh] "
        >
          Chat
        </motion.div>
        <motion.div
          variants={childVariants}
          className="FlashCard-Generator border p-1 m-1 w-[90vw] md:w-[80vw] lg:w-[60vw] xl:[50vw] 2xl:[30vw] rounded-md  h-[28vh] "
        >
          {" "}
          Flash
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
