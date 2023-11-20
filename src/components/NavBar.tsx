function NavBar() {
  return (
    <nav className=" flex relative top-2 m-auto  items-center min-w-[80%] max-w-[95%] w-[98%] sm:max-w-[95%]  xl:max-w-[5%]  p-2  rounded-full min-h-[9vh]  sm:max-h-[10vh] lg:min-h-[12vh]   border-0.5 border-purple-300  overflow-hidden  ">
      <a className="text-xl  sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold ml-1 md:mx-2 lg:mx-5 xl:mx-10 2xl:mx-15 ">
        {" "}
        Vinay kale
      </a>
      <a className="  md:block text-sm  sm:text:lg md:text-lg lg:text-lg xl:text-xl  mx-6  lg:mx-5 xl:mx-10 2xl:mx-15 font-bold">
        {" "}
        About
      </a>
      <a className=" hidden sm:block text-sm  sm:text:lg md:text-lg lg:text-lg xl:text-xl mx-2   lg:mx-5 xl:mx-10 2xl:mx-15 font-bold">
        {" "}
        Tech-Stack
      </a>
      <a className=" text-sm md:text-lg lg:text-lg xl:text-xl   mx-2 lg:mx-5 xl:mx-10 2xl:mx-15  font-bold">
        {" "}
        Projects
      </a>

      <a className=" text-xs md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl absolute right-0  m-1 flex font-bold">
        <button className=" hidden md:flex border h-12 md:h-16 2xl:h-18 xl:py-8 px-2 rounded-full bg-gradient-to-b from-gray-900 to-gray-600   justify-center items-center cursor-pointer">
          Contact Me
        </button>
      </a>
    </nav>
  );
}

export default NavBar;
