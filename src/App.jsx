import { useState, useEffect } from "react";
import Home from "./componet/Home.jsx";
import About from "./componet/About.jsx";
import NotFound from "./componet/NotFound.jsx";
import Navbar from "./navbar.jsx";
import Skill from "./componet/Skill.jsx";
import Project from "./componet/Project.jsx";
import Contact from "./componet/Contact.jsx";

const sections = {
  Home: true,
  About: true,
  Skill: true,
  Project: true,
  Contact: true,
};

function App() {
  const [current, setCurrent] = useState("Home");

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "Home";
      setCurrent(hash);

      // Scroll to the section if it exists
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("hashchange", onHashChange);
    onHashChange();
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <section id="Home">
          <Home />
        </section>
        <section id="About">
          <About />
        </section>
        <section id="Skill" className="-mt-16">
          <Skill />
        </section>
        <section id="Project">
          <Project />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </div>
      {/* Show NotFound if hash doesn't match any section */}
      {!sections[current] && <NotFound />}
    </>
  );
}

export default App;