import { StateValues } from "../utils/motionTypes";
import { staggerContainer } from "../utils/motionVariants";

import { motion } from "framer-motion";
import Gradient from "../rudimentary/Gradient";
import Info from "../rudimentary/Info";
import Socials from "../rudimentary/Socials";
import NavBar from "../rudimentary/NavBar";

function About() {
  const containerVariants = staggerContainer(1);
  return (
    <motion.section
      variants={containerVariants}
      initial={StateValues.hidden}
      whileInView={StateValues.show}
      viewport={{ once: false, amount: 0.5 }}
      className="relative m-2 p-2 w-full min-w-[100vw] min-h-[100vh] lg:min-h-[100vh] z-10  overflow-hidden "
    >
      <Gradient gradient="gradient-spotlight " className="grandient-main" />
      <NavBar></NavBar>
      <Info />
      <Socials
        className="flex lg:flex-col  absolute left-0  top-28 lg:left-auto lg:right-32 lg:top-56   text-4xl  md:4xl lg:text-5xl"
        animate={true}
      />
    </motion.section>
  );
}

export default About;
