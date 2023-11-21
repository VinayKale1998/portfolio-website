import { Link } from "react-scroll";

function NavBar() {
  return (
    <nav
      id="#section-about"
      className="  flex relative top-2 m-auto  items-center min-w-[80%] max-w-[100%] w-[108%] sm:max-w-[95%]  xl:max-w-[5%]  p-2  rounded-full min-h-[9vh]  sm:max-h-[10vh] lg:min-h-[12vh]   border-0.5 border-purple-300  overflow-hidden cursor-pointer   "
    >
      <Link
        to="#section-about"
        smooth={true}
        duration={200}
        className="text-xl  sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold ml-1 md:mx-2 lg:mx-5 xl:mx-10 2xl:mx-15 "
      >
        {" "}
        Vinay kale
      </Link>
      <Link
        to="#section-about"
        smooth={true}
        duration={200}
        className="  md:block text-sm  sm:text:lg md:text-lg lg:text-lg xl:text-xl  mx-6  lg:mx-5 xl:mx-10 2xl:mx-15 font-bold cursor-pointer"
      >
        {" "}
        About
      </Link>
      <Link
        to="#section-tech"
        smooth={true}
        duration={200}
        className=" hidden sm:block text-sm  sm:text:lg md:text-lg lg:text-lg xl:text-xl mx-2   lg:mx-5 xl:mx-10 2xl:mx-15 font-bold"
      >
        {" "}
        Tech-Stack
      </Link>
      <Link
        to="#section-projects"
        smooth={true}
        duration={200}
        className=" text-sm md:text-lg lg:text-lg xl:text-xl   mx-2 lg:mx-5 xl:mx-10 2xl:mx-15  font-bold"
      >
        {" "}
        Projects
      </Link>

      <Link
        to="#section-contact"
        smooth={true}
        duration={200}
        className="  hidden lg:block absolute right-0 text-sm md:text-lg lg:text-lg xl:text-2xl   mx-2 lg:mx-5 xl:mx-10 2xl:mx-15  font-bold"
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default NavBar;
