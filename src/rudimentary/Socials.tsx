import { BsDiscord } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Socials() {
  return (
    <motion.div className="flex lg:flex-col  absolute left-0  top-20 lg:left-auto lg:right-32 lg:top-44  mt-[-25px] text-2xl  md:4xl lg:text-5xl">
      <motion.a
        className="m-1 p-1"
        target="new"
        href="https://www.linkedin.com/in/vinay-raghavendra/"
        whileHover={{ scale: 1.3 }}
      >
        <FaLinkedin />
      </motion.a>
      <motion.a
        className="m-1 p-1"
        target="new"
        href="https://github.com/VinayKale1998"
        whileHover={{ scale: 1.3 }}
      >
        <FaGithub />
      </motion.a>
      <motion.a
        className="m-1 p-1 "
        href=""
        target="new"
        whileHover={{ scale: 1.3 }}
      >
        <BsDiscord />
      </motion.a>
      <motion.a className="m-1 p-1" target="new" whileHover={{ scale: 1.1 }}>
        <FaInstagramSquare />
      </motion.a>
    </motion.div>
  );
}

export default Socials;
