import { StateValues } from "../utils/motionTypes";
import { staggerContainer } from "../utils/motionVariants";

import { motion } from "framer-motion";
import Gradient from "../rudimentary/Gradient";
import Info from "../rudimentary/Info";
import Socials from "../rudimentary/Socials";
import NavBar from "./NavBar";

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
      <Socials />
    </motion.section>
  );
}

export default About;
