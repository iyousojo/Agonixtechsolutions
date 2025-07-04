import React, { useEffect, useState } from "react";
import mypics from "../assets/mypics.jpg";
import bgImg from '../brand banner.png';

function About() {
  // Banner2 typing effect logic
  const sentence = "I created Argonix Tech Solution to provide simple, effective digital solutions for individuals and small businesses bridging the gap between ideas and technology with creativity and purpose.";
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

  // Helper to highlight keywords and phrases
  const highlightSentence = (text) => {
    let highlighted = text
      .replace(
        /Argonix Tech Solution/gi,
        '<span class="text-blue-600 font-extrabold underline underline-offset-4 decoration-blue-400">Argonix Tech Solution</span>'
      )
      .replace(
        /digital solutions/gi,
        '<span class="text-blue-500 font-bold">digital solutions</span>'
      )
      .replace(
        /individuals/gi,
        '<span class="text-blue-400 font-semibold">individuals</span>'
      )
      .replace(
        /small businesses/gi,
        '<span class="text-blue-400 font-semibold">small businesses</span>'
      )
      .replace(
        /ideas/gi,
        '<span class="bg-yellow-100 text-yellow-700 font-bold px-1 rounded">ideas</span>'
      )
      .replace(
        /technology/gi,
        '<span class="bg-green-100 text-green-700 font-bold px-1 rounded">technology</span>'
      )
      .replace(
        /creativity/gi,
        '<span class="bg-blue-100 text-blue-700 font-bold px-1 rounded">creativity</span>'
      )
      .replace(
        /purpose/gi,
        '<span class="bg-blue-100 text-blue-700 font-bold px-1 rounded">purpose</span>'
      );
    return highlighted;
  };

  return (
    <section
      className="w-full py-8 px-2 sm:px-8 md:px-16 lg:px-24 xl:px-32 banner-bg banner-text mb-60 relative"
      id="About"
      style={{
        fontFamily:
          "'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'Liberation Sans', sans-serif",
      }}
    >
      {/* Banner2-like Highlighted Section */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center mb-12">
        <div className="flex-1 flex flex-col items-start mt-8">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 m-0">
              About Argonix Tech Solution
            </h2>
            {/* Small image beside the heading */}
            <img
              src={bgImg}
              alt="Argonix Brand"
              className="w-12 h-12 object-cover rounded-full border-2 border-blue-300 shadow transition-transform duration-300 hover:scale-125"
              // Added transition and hover:scale-125 for grow animation on hover
            />
          </div>
          <p
            className="text-xs sm:text-sm md:text-base max-w-2xl min-h-[32px] font-semibold mb-4 text-left break-words whitespace-normal"
            style={{ lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{
              __html: highlightSentence(displayed) +
                (typing ? '<span class="animate-pulse text-blue-600 font-extrabold">|</span>' : "")
            }}
          />
          <ul className="list-disc list-inside text-blue-600 dark:text-blue-400 space-y-1 mb-4">
            <li>🌐 Simple, effective digital solutions for everyone</li>
            <li>🚀 Bridging the gap between <span className="bg-yellow-100 text-yellow-700 font-bold px-1 rounded">ideas</span> and <span className="bg-green-100 text-green-700 font-bold px-1 rounded">technology</span></li>
            <li>🎨 Powered by <span className="bg-blue-100 text-blue-700 font-bold px-1 rounded">creativity</span> and <span className="bg-blue-100 text-blue-700 font-bold px-1 rounded">purpose</span></li>
          </ul>
          <div className="flex items-center gap-4 mt-4 p-3 bg-blue-50 rounded-xl shadow border border-blue-200 max-w-md">
            <img
              src={mypics}
              alt="Solomon"
              className="w-16 h-16 object-cover rounded-full border-2 border-blue-300 shadow"
            />
            <span className="text-blue-700 font-semibold italic">
              "Bridging the gap between ideas and technology with <span className="bg-blue-100 text-blue-700 font-bold px-1 rounded">creativity</span> and <span className="bg-blue-100 text-blue-700 font-bold px-1 rounded">purpose</span>."
            </span>
          </div>
        </div>
      </div>
      {/* About Me Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Template content */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">About Me</h2>
          <p className="mb-4 text-blue-600 dark:text-blue-400">
            Hi! I'm Solomon, a passionate full stack developer dedicated to building
            modern, scalable, and user-friendly web applications. I enjoy solving
            problems and turning ideas into reality through code.
          </p>
          <p className="mb-4 text-blue-600 dark:text-blue-400">
            I have 2 years of hands-on experience working with a variety of technologies, delivering projects for individuals and small businesses. My journey has helped me develop strong problem-solving skills and a deep understanding of both frontend and backend development.
          </p>
          <ul className="list-disc list-inside text-blue-600 dark:text-blue-400 space-y-1">
            <li>🌐 Experienced with React, Node.js, php and more</li>
            <li>🚀 Focused on performance and accessibility</li>
            <li>🤝 Love collaborating and learning new things</li>
          </ul>
        </div>
        {/* Right: Picture */}
        <div className="flex justify-center md:justify-end">
          <img
            src={mypics}
            alt="Solomon"
            className="w-96 h-96 object-cover rounded-2xl shadow-lg border-4 border-blue-100"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
export { About };
