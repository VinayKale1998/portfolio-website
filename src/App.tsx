import { type FC } from "react";
import LandingPage from "./pages/LandingPage";

const App: FC = () => {
  return (
    <main className="dark bg-primary-purple px-2 py-2 min-h-[100vh] inset-0 ">
      <LandingPage></LandingPage>
    </main>
  );
};

export default App;
