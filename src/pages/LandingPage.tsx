import About from "../components/About";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";

function LandingPage() {
  return (
    <main className="dark:text-white h-auto flex flex-col min-w-[100%] overflow-hidden">
      <About />
      <TechStack></TechStack>
      <Projects />
      <Footer></Footer>
    </main>
  );
}

export default LandingPage;
