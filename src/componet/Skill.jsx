import Navbar from "../navbar";


function Skill() {
  //  skills data
  const skills = [
    {
      name: "React",
      icon: (
        <svg
          className="w-8 h-8 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth="2" />
          <ellipse cx="12" cy="12" rx="4" ry="10" strokeWidth="2" />
        </svg>
      ),
      desc: "Modern UI library for building fast, interactive interfaces.",
    },
    {
      name: "Bootstrap",
      icon: (
        <svg
          className="w-8 h-8 text-purple-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="24" rx="6" fill="#fff" />
          <path d="M7 6h7a4 4 0 0 1 0 8H7V6zm2 2v4h5a2 2 0 0 0 0-4H9z" fill="#7952B3"/>
          <text x="8" y="18" fontSize="8" fill="#7952B3" fontWeight="bold">B</text>
        </svg>
      ),
      desc: "Popular CSS framework for responsive, mobile-first web development.",
    },
    {
      name: "Node.js",
      icon: (
        <svg
          className="w-8 h-8 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2" />
          <path d="M8 16v-4a4 4 0 018 0v4" strokeWidth="2" />
        </svg>
      ),
      desc: "Backend JavaScript runtime for scalable server-side apps.",
    },
    {
      name: "PHP",
      icon: (
        <svg
          className="w-8 h-8 text-indigo-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <ellipse cx="12" cy="12" rx="10" ry="6" strokeWidth="2" />
          <text
            x="8"
            y="16"
            fontSize="6"
            fill="currentColor"
          >
            PHP
          </text>
        </svg>
      ),
      desc: "Popular scripting language for dynamic web development.",
    },
    {
      name: "JavaScript",
      icon: (
        <svg
          className="w-8 h-8 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2" />
          <text
            x="7"
            y="17"
            fontSize="8"
            fill="currentColor"
          >
            JS
          </text>
        </svg>
      ),
      desc: "Core language for interactive and dynamic web experiences.",
    },
    {
      name: "Tailwind CSS",
      icon: (
        <svg
          className="w-8 h-8 text-cyan-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M3 15c1.5-2 4.5-2 6 0s4.5 2 6 0 4.5-2 6 0" strokeWidth="2" />
        </svg>
      ),
      desc: "Utility-first CSS framework for rapid UI development.",
    },
        {
      name: "MySQL",
      icon: (
        <svg
          className="w-8 h-8 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2" />
          <text
            x="7"
            y="17"
            fontSize="8"
            fill="currentColor"
          >
            MySQL
          </text>
        </svg>
      ),
      desc: "A fast, open-source database system used to manage and organize data efficiently.",
    },
    {
      name: "MongoDB",
      icon: (
        <svg
          className="w-8 h-8 text-green-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 2v20M12 2c-4 4-6 8-6 12s2 8 6 8 6-4 6-8-2-8-6-12z" strokeWidth="2" />
        </svg>
      ),
      desc: "NoSQL database for flexible, scalable data storage.",
    },
    

  ];

  return (
    <section
      className="w-full py-12 px-2 sm:px-8 md:px-16 lg:px-24 xl:px-32 banner-bg banner-text mb-32 relative"
      id="Skill"
      style={{
        fontFamily:
          "'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'Liberation Sans', sans-serif",
      }}
    >
      
    
      <div className="max-w-5xl mx-auto flex flex-col items-center mb-12">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          Skills Offered
        </h2>
        <p className="text-base md:text-lg text-blue-700 dark:text-blue-300 font-medium mb-6 text-center max-w-2xl">
          Over the past 2 years, I have developed a strong set of technical skills
          that enable me to build robust, modern, and scalable web applications
          from scratch.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-2 sm:mx-4 md:mx-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="card-bg border border-blue-100 dark:border-slate-700 rounded-2xl shadow-md p-6 flex flex-col items-center transition-transform hover:scale-105"
          >
            <div className="mb-3">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-2">
              {skill.name}
            </h3>
            <p className="text-sm text-blue-600 dark:text-blue-400 text-center">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skill;
export { Skill };
