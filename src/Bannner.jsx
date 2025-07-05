import { useEffect, useState } from "react";
import bgImg from './porforlio.png';

function Banner() {
  const sentences = [
    "I am a professional full stack developer.",
    "I specialize in building dynamic, scalable, and high-quality web applications."
  ];
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [sentenceIdx, setSentenceIdx] = useState(0);

  // Theme toggle state
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.classList.remove("theme-light", "theme-dark");
    document.documentElement.classList.add(`theme-${theme}`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    let i = 0;
    let interval;
    let timeout;

    const typeSentence = (idx) => {
      setTyping(true);
      i = 0;
      interval = setInterval(() => {
        setDisplayed(sentences[idx].slice(0, i + 1));
        i++;
        if (i === sentences[idx].length) {
          clearInterval(interval);
          setTyping(false);
          timeout = setTimeout(() => {
            // After a short pause, clear and type the next sentence
            setDisplayed("");
            setTyping(true);
            setTimeout(() => {
              setSentenceIdx((idx + 1) % sentences.length);
            }, 400); // short clear pause before next sentence
          }, 1800); // pause after typing before clearing
        }
      }, 15);
    };

    typeSentence(sentenceIdx);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
    // eslint-disable-next-line
  }, [sentenceIdx]);

  return (
    <div
      className="flex w-full p-4 sm:p-8 md:p-12 mt-8 mb-8 banner-bg banner-text relative"
      style={{
        minHeight: "70vh",
        marginTop: "1rem",
        fontFamily:
          "'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'Liberation Sans', sans-serif",
      }}
    >

      <div className="w-full flex flex-row items-end justify-between h-full pb-8 pl-2 sm:pl-4 md:pl-8 mt-2 gap-6">
        <div className="flex-1 flex flex-col items-start">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight text-left banner-text"
            style={{
              backgroundColor: "var(--banner-bg)",
              padding: "1.5rem 1.5rem",
              borderRadius: "1rem"
            }}
          >
            HI, I'M <span className="py-90   glow-blue font-extrabold">solomon</span>
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl max-w-4xl min-h-[72px] font-semibold mb-4 text-left break-words whitespace-normal banner-animated">
            {displayed}
            {typing && <span className="animate-pulse glow-blue">|</span>}
          </p>
          <p className="text-lg sm:text-2xl md:text-3xl max-w-4xl min-h-[72px] font-bold text-left break-words whitespace-normal banner-text">
            I created this website To showcase  my Brand and my skill
          </p>
          <button
            onClick={() => {
              const contact = document.getElementById("contact");
              if (contact) {
                contact.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mt-8 px-8 py-3 bg-blue-500 text-white rounded-full font-bold shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-600 animate-bounce"
            style={{ animationDuration: "1.5s" }}
          >
            Contact Me
          </button>
        </div>
        <div className="flex-1 flex justify-end items-end mt-8 md:mt-0">
          <img
            src={bgImg}
            alt="solomon"
            style={{
              width: "320px",      // increased from 240px
              height: "320px",     // increased from 240px
              objectFit: "cover",
              borderRadius: "50%"
            }}
            className="min-w-[200px] max-w-[320px] w-full h-auto"
          />
        </div>
      </div>
      {/* Absolutely positioned Scroll Down Button at bottom center */}
      <button
        onClick={() => {
          window.scrollBy({ top: window.innerHeight * 0.2, left: 0, behavior: "smooth" });
        }}
        className="flex flex-col items-center text-blue-500 font-semibold animate-bounce"
        style={{
          position: "absolute",
          left: "50%",
          bottom: "18px",
          transform: "translateX(-50%)",
          animationDuration: "1.2s",
          zIndex: 10
        }}
      >
        <span>Scroll Down</span>
        <svg className="w-6 h-6 mt-1 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}
export default Banner;