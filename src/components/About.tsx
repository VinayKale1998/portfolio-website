import { StateValues } from "../utils/motionTypes";
import { staggerContainer } from "../utils/motionVariants";

import { motion } from "framer-motion";
import Gradient from "../rudimentary/Gradient";
import Info from "../rudimentary/Info";
import Socials from "../rudimentary/Socials";

function About() {
  const containerVariants = staggerContainer(1);
  return (
    <motion.section
      variants={containerVariants}
      initial={StateValues.hidden}
      whileInView={StateValues.show}
      viewport={{ once: false, amount: 0.5 }}
      className="relative m-10 p-2 w-full min-w-[100vw]  min-h-[90vh] z-10 "
    >
      <Gradient gradient="gradient-spotlight " className="grandient-main" />
      <Info />
      <Socials />
    </motion.section>
  );
}

export default About;
