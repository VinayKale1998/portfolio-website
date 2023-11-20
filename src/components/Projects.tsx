import { motion } from "framer-motion";
import Card from "../rudimentary/Card";
import Gradient from "../rudimentary/Gradient";
function Projects() {
  return (
    <motion.div className="relative flex flex-col min-h-[100vh] m-1 p-1 items-center overflow-hidden z-30">
      <Gradient
        className="gradient-normal"
        gradient="gradient-projects"
      ></Gradient>
      <Card className="Projects-Title text-3xl md:text-3xl lg:text-4xl xl:text-6xl p-2 m-2">
        PROJECTS
      </Card>
      <div className="grid grid-row-3 p-2 m-2 ">
        <div className="BusChilli border p-1 m-1 w-[90vw] md:w-[80vw] lg:w-[60vw] xl:[50vw] 2xl:[30vw] rounded-md h-[28vh] ">
          {" "}
          Bus
        </div>
        <div className="WebChat border  p-1 m-1 w-[90vw] md:w-[80vw] lg:w-[60vw] xl:[50vw] 2xl:[30vw] rounded-md h-[28vh] ">
          Chat
        </div>
        <div className="FlashCard-Generator border p-1 m-1 w-[90vw] md:w-[80vw] lg:w-[60vw] xl:[50vw] 2xl:[30vw] rounded-md  h-[28vh] ">
          {" "}
          Flash
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
