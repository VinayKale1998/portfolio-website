import { ProjectDetails } from "../components/Projects";
import BusChilli from "../assets/BusChilli.png";
import Converso from "../assets/Converso.png";
import FlashKrew from "../assets/FlashKrew.png";

const BusChilliDetails: ProjectDetails = {
  title: "BusChilli",
  description:
    " A Bus Booking Platform that leverages MERN-Stack with AWS and Docker",
  src: BusChilli,
  stack: [
    "React",
    "Redux",
    "Node.js",
    "express",
    "MongoDB",
    "Tailwind",
    "JWT",
    "Framer-motion",
    "Docker",
    "AWS",
  ],
};
const ConversoDetails: ProjectDetails = {
  title: "Converso",
  description: " A Realtime chat application with Socket.io",
  src: Converso,
  stack: [
    "React",
    "Socket.io",
    "redis",
    "express",
    "MongoDB",
    "Tailwind",
    "JWT",
    "Framer-motion",
    "Docker",
    "AWS",
  ],
};

const FlashKrewDetails: ProjectDetails = {
  title: "FlashKrew",
  description: " A Flashcard generator ReactJS app",
  src: FlashKrew,
  stack: ["React", "Redux", "Tailwind", "Framer-motion", "Docker", "AWS"],
};

const ProjectsData = [BusChilliDetails, ConversoDetails, FlashKrewDetails];

export { ProjectsData };
