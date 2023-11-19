function NavBar() {
  return (
    <nav className=" flex relative top-3 left-0 right-0 m-auto  justify-start items-center min-w-[80%] max-w-[98%] w-[98%] sm:max-w-[80%]  xl:max-w-[75%]  px-4 py-4 rounded-full max-h-[10vh] bg-secondar-white dark:bg-primary-purple  border-0.5 border-purple-300  overflow-hidden  ">
      <a className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold mx-1 md:mx-2 lg:mx-5 xl:mx-10 2xl:mx-15 ">
        {" "}
        Vinay kale
      </a>
      <a className="text-sm  sm:text:md md:text-md lg:text-lg xl:text-xl  mx-2  lg:mx-5 xl:mx-10 2xl:mx-15">
        {" "}
        About
      </a>
      <a className="text-sm  sm:text:md md:text-md lg:text-lg xl:text-xl  mx-2  lg:mx-5 xl:mx-10 2xl:mx-15">
        {" "}
        Tech-Stack
      </a>
      <a className="text-sm md:text-md lg:text-lg xl:text-xl  mx-4  lg:mx-5 xl:mx-10 2xl:mx-15 ">
        {" "}
        Projects
      </a>

      <a className="text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl absolute right-2 mx-4  lg:mx-5 xl:mx-10 2xl:mx-15 flex">
        <span className="hidden sm:block mx-10">Light-Dark </span>{" "}
        <button className="border border-1 border-white px-2 rounded-full bg-gradient-to-b from-gray-900 to-gray-600  flex justify-center items-center cursor-pointer">
          Contact Me
        </button>
      </a>
    </nav>
  );
}

export default NavBar;
