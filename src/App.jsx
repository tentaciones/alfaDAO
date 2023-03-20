import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  StarsCanvas,
  Community,
  Earth,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className="flex w-screen space-x-0">
            <Community />

            <Hero />
          </div>
        </div>
        <About />
        <Experience />
        <Tech />

        <div className="relative z-0">
          <Contact />
          <Earth />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
