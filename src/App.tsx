import { type FC } from "react";
import LandingPage from "./pages/LandingPage";
import { motion } from "framer-motion";
const App: FC = () => {
  return (
    <motion.main className="dark bg-primary-purple px-2 py-2 min-h-[100vh] inset-0 min-w-[100%] ">
      <LandingPage></LandingPage>
    </motion.main>
  );
};

export default App;
