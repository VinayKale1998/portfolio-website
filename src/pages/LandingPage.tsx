import NavBar from "../components/NavBar";
import About from "../components/About";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
function LandingPage() {
  return (
    <main className="dark:text-white h-auto flex flex-col">
      <NavBar />
      <About />
      <TechStack></TechStack>
      <Projects />
    </main>
  );
}

export default LandingPage;
