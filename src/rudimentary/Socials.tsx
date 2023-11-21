import { BsDiscord } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Socials({
  className,
  animate,
}: {
  className: string;
  animate: boolean;
}) {
  const jumpAnimation = {
    y: ["0%", "-20%", "0%"],
    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: animate ? Infinity : 0,
    },
  };

  return (
    <motion.div className={className}>
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
