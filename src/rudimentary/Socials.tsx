import { BsDiscord } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Socials() {
  const jumpAnimation = {
    y: ["0%", "-20%", "0%"],
    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: Infinity,
    },
  };

  const staggerVariant = {
    visible: {
      transition: {
        staggerChildren: 1,
      },
    },
  };

  return (
    <motion.div
      className="flex lg:flex-col  absolute left-0  top-14 lg:left-auto lg:right-32 lg:top-44  mt-[-25px] text-4xl  md:4xl lg:text-5xl"
      variants={staggerVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.a
        className="m-1 p-1"
        target="new"
        href="https://www.linkedin.com/in/vinay-raghavendra/"
        whileHover={{ scale: 1.3 }}
        animate={jumpAnimation}
      >
        <FaLinkedin />
      </motion.a>
      <motion.a
        className="m-1 p-1"
        target="new"
        href="https://github.com/VinayKale1998"
        whileHover={{ scale: 1.3 }}
        animate={jumpAnimation}
      >
        <FaGithub />
      </motion.a>
      <motion.a
        className="m-1 p-1 "
        href="https://discord.gg/UthGePew"
        target="new"
        whileHover={{ scale: 1.3 }}
        animate={jumpAnimation}
      >
        <BsDiscord />
      </motion.a>
      <motion.a
        className="m-1 p-1"
        target="new"
        whileHover={{ scale: 1.1 }}
        animate={jumpAnimation}
      >
        <FaInstagramSquare />
      </motion.a>
    </motion.div>
  );
}

export default Socials;
