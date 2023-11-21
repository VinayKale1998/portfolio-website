import { motion, useInView } from "framer-motion";
import Card from "../rudimentary/Card";
import Gradient from "../rudimentary/Gradient";
import { useRef } from "react";
import Project from "../rudimentary/Project";
import { ProjectsData } from "../store/ProjectDetails";

export interface ProjectDetails {
  src: string;
  title: string;
  description: string;
  stack: string[];
  link: string;
}
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

  const ProjectDefinitions: JSX.Element[] = ProjectsData.map((item) => {
    return (
      <Project
        src={item.src}
        description={item.description}
        title={item.title}
        key={item.src}
        link={item.link}
      ></Project>
    );
  });

  return (
    <motion.div
      id="#section-projects"
      className="relative flex flex-col min-h-[100vh] m-1 p-1 items-center  overflow-hidden z-30"
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
        className={`grid grid-row-${ProjectDefinitions.length} p-2 m-2 `}
        variants={parentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {ProjectDefinitions}
      </motion.div>
    </motion.div>
  );
}

export default Projects;
