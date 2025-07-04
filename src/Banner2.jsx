import { useEffect, useState } from "react";
import bgImg from './brand banner.png';

function Banner2() {
  const sentence = "I created Argonix Tech Solution to provide simple, effective digital solutions\nfor individuals and small businesses bridging the gap between ideas and technology with creativity and purpose.";
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    let interval;

    setDisplayed("");
    setTyping(true);

    interval = setInterval(() => {
      setDisplayed(sentence.slice(0, i + 1));
      i++;
      if (i === sentence.length) {
        clearInterval(interval);
        setTyping(false);
      }
    }, 40);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      key={displayed.length === 0 && typing ? Math.random() : "static"}
      className="flex w-full p-2 sm:p-4 md:p-6 mt-16 mb-32 border-b-4 border-blue-100 relative"
      style={{
        minHeight: "80vh",
        minHeight: "max(80vh, 480px)",
        // Responsive minHeight for small screens
        // 80vh for most, but at small screens, at least 480px
        marginTop: "2rem",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "50% auto",
        backgroundPosition: "center",
        fontFamily:
          "'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'Liberation Sans', sans-serif",
        color: "#1A1A1A",
        backgroundColor: "#fff"
      }}
    >
      <div className="w-full flex flex-row items-end justify-between h-full pb-8 pl-1 sm:pl-2 md:pl-4 mt-6 gap-4">
        <div className="flex-1 flex flex-col items-start mt-16">
          <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-2 tracking-tight text-left" style={{color: "#1A1A1A"}}>
            This <span style={{color: "#3b82f6"}} className="font-extrabold">ARGONIX TECH SOLUTION</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base max-w-2xl min-h-[32px] font-semibold mb-2 text-left break-words whitespace-normal" style={{color: "#3b82f6"}}>
            {displayed.split('\n').map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
            {typing && <span className="animate-pulse" style={{color: "#3b82f6"}}>|</span>}
          </p>
          <p className="text-xs sm:text-sm md:text-base max-w-2xl min-h-[32px] font-bold text-left break-words whitespace-normal" style={{color: "#1A1A1A"}}>
            
          </p>
        </div>
      </div>
      {/* Absolutely positioned Scroll Down Button at bottom center */}
      <button
        onClick={() => {
          window.scrollBy({ top: window.innerHeight * 0.5, left: 0, behavior: "smooth" });
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
export default Banner2;