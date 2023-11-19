import NavBar from "../components/NavBar";
import About from "../components/About";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import { Link } from "react-scroll";
import { useRef } from "react";

function LandingPage() {
  const AboutRef = useRef<null | HTMLElement>(null);
  return (
    <main className="dark:text-white h-auto flex flex-col min-w-[100%] overflow-hidden">
      <NavBar />
      <About />
      <TechStack></TechStack>
      <Projects />
    </main>
  );
}

export default LandingPage;
