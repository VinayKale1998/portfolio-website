import { type FC } from "react";
import LandingPage from "./pages/LandingPage";
import { motion } from "framer-motion";
const App: FC = () => {
  return (
    <motion.main className="dark bg-primary-purple  ">
      <LandingPage></LandingPage>
    </motion.main>
  );
};

export default App;
