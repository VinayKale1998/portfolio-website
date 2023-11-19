import { BsDiscord } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Socials() {
  return (
    <div className="flex lg:flex-col  absolute left-0  top-20 lg:left-auto lg:right-32 lg:top-44  mt-[-25px] text-2xl  md:4xl lg:text-5xl">
      <a
        className="m-1 p-1"
        target="new"
        href="https://www.linkedin.com/in/vinay-raghavendra/"
      >
        <FaLinkedin />
      </a>
      <a
        className="m-1 p-1"
        target="new"
        href="https://github.com/VinayKale1998"
      >
        <FaGithub />
      </a>
      <a className="m-1 p-1 " href="" target="new">
        <BsDiscord />
      </a>
      <a className="m-1 p-1" target="new">
        <FaInstagramSquare />
      </a>
    </div>
  );
}

export default Socials;
