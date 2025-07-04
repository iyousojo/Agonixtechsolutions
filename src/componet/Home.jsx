import Slider from "../Slider.jsx";
import { useEffect } from "react";
import ChatBot from "./ChatBot"; // import the ChatBot component

function Home() {
  useEffect(() => {
    const home = document.getElementById("Home");
    if (home) {
      home.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/*slider*/}
      <section id="Home">
        <Slider />
      </section>
      {/*  footer*/}
      <ChatBot /> {/* Add the floating chat bot here so it appears on all pages */}
    </div>
  );
}
export default Home;

// Export for routing
export { Home };