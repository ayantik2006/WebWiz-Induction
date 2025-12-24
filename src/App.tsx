import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.tsx";
import AboutUs from "./components/AboutUs.tsx";
import Team from "./components/Team.tsx";
import Projects from "./components/Projects.tsx";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
