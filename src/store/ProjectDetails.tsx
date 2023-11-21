import { ProjectDetails } from "../components/Projects";
import BusChilli from "../assets/BusChilli.png";
import Converso from "../assets/Converso.png";
import FlashKrew from "../assets/FlashKrew.png";

const BusChilliDetails: ProjectDetails = {
  title: "BusChilli",
  description:
    " A Bus Booking Platform that leverages MERN-Stack, built to deliver seamless travel booking experience for the new world user !",
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
  link: "https://github.com/VinayKale1998/BusChilli.git",
};
const ConversoDetails: ProjectDetails = {
  title: "Converso",
  description:
    " A Realtime chat application with Socket.io and MERN and framer-motion for native-like animations. Now chat, group-up and share with Converso",
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
  link: "https://github.com/VinayKale1998/Converso-backend.git",
};

const FlashKrewDetails: ProjectDetails = {
  title: "FlashKrew",
  description:
    " A Flashcard generator build with ReactJS, Redux and Tailwind. Now create flashcards and get timed notifications to revise the flashcards, uses the repetitive learning idea",
  src: FlashKrew,
  stack: ["React", "Redux", "Tailwind", "Framer-motion", "Docker", "AWS"],
  link: "https://github.com/VinayKale1998/FlaskKrew.git",
};

const ProjectsData = [BusChilliDetails, ConversoDetails, FlashKrewDetails];

export { ProjectsData };
