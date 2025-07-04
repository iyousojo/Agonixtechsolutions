
import { Github, ExternalLink } from "lucide-react";
import React, { useState, useEffect } from "react";
import    expressloom from "../projectpics/expressloom index page.png"; 
import    eCommerce from "../projectpics/eCommerce site.png";
import    taskManagement from "../projectpics/task management system .png";
import    builtClock from "../projectpics/time.png";
import    porforlio from "../projectpics/portfolio1.png";
import UserManagementSystem from "../projectpics/usermanangementsytem.png";




function Project() {
  // Add a showMore state for each card that needs "see more"
  const [showMore, setShowMore] = useState([false, false, false, false, false,false]);

  // Ensure showMore always has 6 elements (for 5 cards)
  useEffect(() => {
    setShowMore(prev => {
      if (prev.length < 6) return [...prev, ...Array(6 - prev.length).fill(false)];
      if (prev.length > 6) return prev.slice(0, 6);
      return prev;
    });
  }, []);

  const handleToggle = idx => {
    setShowMore(prev => prev.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <section className="w-full py-12 px-2 sm:px-8 md:px-16 lg:px-24 xl:px-32 banner-bg banner-text mb-32 relative" id="Project">
      <div className="max-w-5xl mx-auto flex flex-col items-center mb-12">
        <h1 className="text-3xl font-bold text-blue-600 text-blue-400 mb-2">Project Page</h1>
        <p className="text-blue-400 mb-4">A showcase of my works (These are just a few projects I'm still working on major updates and building more...)</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mx-2 sm:mx-4 md:mx-8">
        {/* project card 1 */}
        <div className="card-bg dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 flex flex-col hover:w-[110%] hover:scale-105">
          <img src={expressloom} alt="Project 1" className="w-full h-36 object-cover"/>
          <div className="flex-1 flex flex-col p-5 pb-3">
            <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">
              🚚 Expressloom (First Fullstack project with html,css, Bootstrap,php, MySQL)
            </h2>
            <p className="text-blue-600 dark:text-blue-300 text-sm break-words">
              <span className="font-semibold text-blue-700">Express Loom</span> is a personal courier and logistics web project I developed to simulate real-world delivery operations. <span className="font-semibold text-blue-500">📦</span>
              {!showMore[0] && <>... <button className="text-blue-700 underline" onClick={() => handleToggle(0)}>See more</button></>}
              {showMore[0] && (
                <>
                  <br />
                  It features <span className="font-semibold text-blue-700">parcel booking</span>, <span className="font-semibold text-blue-700">user registration</span>, and a <span className="font-semibold text-blue-700">tracking system</span> managed by an <span className="font-semibold text-blue-700">admin</span> who updates parcel statuses manually. <span className="font-semibold text-blue-500">📝</span><br />
                  The system includes a <span className="font-semibold text-blue-700">basic payment step</span>, but the only way users can proceed past the payment stage is by selecting the <span className="font-semibold text-blue-800">"Pay with Cash"</span> option. <span className="font-semibold text-blue-500">💵</span><br />
                  This setup helps demonstrate <span className="font-semibold text-blue-700">logistics flow</span>, <span className="font-semibold text-blue-700">admin control</span>, and <span className="font-semibold text-blue-700">UI/UX design</span> without relying on a live payment API, serving as a <span className="font-semibold text-blue-800">strong foundation</span> for future enhancements. <span className="font-semibold text-blue-500">🚀</span>
                  <button className="ml-2 text-blue-700 underline" onClick={() => handleToggle(0)}>See less</button>
                </>
              )}
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/iyousojo/expressloom.git" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={24} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors" />
              </a>
              <a href="https://expressloom.infy.uk/" target="_blank" rel="noopener noreferrer" aria-label="Live Link">
                <ExternalLink size={24} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>
        </div>
        {/* project card 2 */}
        <div className="card-bg rounded-lg shadow-md overflow-hidden transition-all duration-300 flex flex-col hover:w-[110%] hover:scale-105">
          <img src={eCommerce} alt="Project 2" className="w-full h-36 object-cover"/>
          <div className="flex-1 flex flex-col p-5 pb-3">
            <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">
              Simple E-commerce Website   (First Frontend project with HTML, CSS )
            </h2>
            <div className="flex-1 flex flex-col">
              <p className="text-blue-600 dark:text-blue-300 text-sm break-words">
                This is a <span className="font-semibold text-blue-700">one-page e-commerce website</span> built using only <span className="font-semibold text-blue-700">HTML</span> and <span className="font-semibold text-blue-700">CSS</span>. 🛒
                {!showMore[1] && (
                  <>... <button className="text-blue-700 underline" onClick={() => handleToggle(1)}>See more</button></>
                )}
                {showMore[1] && (
                  <>
                    <br />
                    It features a <span className="font-semibold text-blue-700">basic product layout</span> and a <span className="font-semibold text-blue-700">simple cart-style design</span>.<br />
                    The site is currently designed for <span className="font-semibold text-blue-700">laptop/desktop view only</span> and is <span className="font-semibold text-red-600">not responsive</span> on other devices. ❌📱<br /><br />
                    <span className="font-semibold text-blue-700">Responsiveness</span> and <span className="font-semibold text-blue-700">mobile-friendly design</span> will be added later to improve usability across all device sizes.<br /><br />
                    This project helps practice <span className="font-semibold text-blue-700">front-end structure</span>, <span className="font-semibold text-blue-700">layout</span>, and <span className="font-semibold text-blue-700">styling</span> without JavaScript or frameworks.<br /><br />
                    <span className="font-semibold text-blue-700">They just use a simple JavaScript slider for Banner images.</span> 🖼️➡️
                    <br />
                    <span className="block mt-4 text-yellow-600 dark:text-yellow-400">
                      <span className="font-semibold text-yellow-700">😕 Honestly, I'm not too happy about this project. </span>
                      <span className="font-semibold text-yellow-500">As I've grown as a developer, I just feel like it's not giving what it should. The lack of responsiveness really bothers me. 📱💔</span>
                      <br />
                      <span className="font-semibold text-yellow-700">But hey, every journey starts somewhere! 🚀</span>
                    </span>
                    <button className="ml-2 text-blue-700 underline" onClick={() => handleToggle(1)}>See less</button>
                  </>
                )}
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://iyousojo.github.io/firstproject" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={24} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors" />
              </a>
              <a href="https://github.com/iyousojo/firstproject.git" target="_blank" rel="noopener noreferrer" aria-label="Live Link">
                <ExternalLink size={24} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>
        </div>
        {/* project card 3 */}
        <div className="card-bg rounded-lg shadow-md overflow-hidden transition-all duration-300 flex flex-col hover:w-[110%] hover:scale-105">
          <img src={taskManagement} alt="Project 3" className="w-full h-36 object-cover"/>
          <div className="flex-1 flex flex-col p-5 pb-3">
            <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">Task Management App (React)</h2>
            <p className="text-blue-600 dark:text-blue-300 text-sm break-words">
              This is a fully responsive task management application built with React. It enables users to create, update, and delete tasks, helping organize daily activities efficiently across all device sizes—from laptops to mobile phones.
              {!showMore[2] && <>... <button className="text-blue-700 underline" onClick={() => handleToggle(2)}>See more</button></>}
              {showMore[2] && (
                <>
                  <br />
                  The app leverages React’s component-based structure and hooks for smooth state management. The clean, user-friendly interface adapts seamlessly to different screen sizes, ensuring a great user experience on desktops, tablets, and smartphones.<br />
                  This project demonstrates my skills in <span className="font-semibold text-blue-700">React development</span>, <span className="font-semibold text-blue-700">responsive design</span>, and building intuitive, dynamic web applications.
                  <button className="ml-2 text-blue-700 underline" onClick={() => handleToggle(2)}>See less</button>
                </>
              )}
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/iyousojo/task-management-system-with-react.git" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={24} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors" />
              </a>
              <a href="https://iyousojo.github.io/task-management-system-with-react/" target="_blank" rel="noopener noreferrer" aria-label="Live Link">
                <ExternalLink size={24} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>
        </div>
        {/* project card 4 */}
        <div className="card-bg rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:w-[110%] hover:scale-105 flex flex-col">
          <img src={builtClock} alt="Project 4" className="w-full h-48 object-cover"/>
          <div className="flex-1 flex flex-col p-4 pb-2">
            <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">Built Clock with React</h2>
            <p className="text-blue-600 dark:text-blue-300 text-sm break-words">
              Built Clock with React is a real-time digital clock web app made with <span className="font-semibold text-blue-700">React.js</span> and <span className="font-semibold text-blue-700">Vite</span>. It shows the current time and updates every second using React state and effects. The UI is clean, minimal, and fully responsive for both desktop and mobile. The project is optimized for performance and hosted on GitHub Pages.
              {!showMore[3] && <>... <button className="text-blue-700 underline" onClick={() => handleToggle(3)}>See more</button></>}
              {showMore[3] && (
                <>
                  <br />
                  <span className="font-semibold text-blue-700">Key Features:</span>
                  <ul className="list-disc list-inside ml-4 mt-1 text-blue-600 dark:text-blue-300">
                    <li>⏰ Real-time clock updates</li>
                    <li>📱 Responsive design</li>
                    <li>⚡ Fast and lightweight</li>
                    <li>🌙 Light/dark mode support</li>
                  </ul>
                  <button className="ml-2 text-blue-700 underline" onClick={() => { handleToggle(3); handleToggle(4); }}>See less</button>
                </>
              )}
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/iyousojo/built-clock-with-react.git" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={24} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors" />
              </a>
              <a href="https://iyousojo.github.io/built-clock-with-react/" target="_blank" rel="noopener noreferrer" aria-label="Live Link">
                <ExternalLink size={24} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>
        </div>
        {/* project card 5 */}
        <div className="card-bg rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:w-[110%] hover:scale-105 flex flex-col">
          <img src={porforlio} alt="Project 5" className="w-full h-48 object-cover"/>
          <div className="p-4 pb-2 flex-1 flex flex-col">
            <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">Previous Portfolio</h2>
            <p className="text-blue-600 dark:text-blue-300 text-sm break-words">
              This <span className="font-semibold text-blue-700">portfolio</span> was built with <span className="font-semibold text-blue-700">HTML</span>, <span className="font-semibold text-blue-700">CSS</span>, and <span className="font-semibold text-blue-700">Bootstrap</span> to showcase my early web projects. The layout is <span className="font-semibold text-blue-700">responsive</span> and <span className="font-semibold text-blue-700">clean</span>, using Bootstrap’s grid for a <span className="font-semibold text-blue-700">mobile-first experience</span>. It includes sections for my <span className="font-semibold text-blue-700">bio</span>, <span className="font-semibold text-blue-700">project highlights</span>, and <span className="font-semibold text-blue-700">contact info</span>. The site is <span className="font-semibold text-blue-700">static</span>, but it demonstrates my skills in <span className="font-semibold text-blue-700">web structure</span>, <span className="font-semibold text-blue-700">styling</span>, and <span className="font-semibold text-blue-700">responsive design</span>.
              {!showMore[4] && <>... <button className="text-blue-700 underline" onClick={() => handleToggle(4)}>See more</button></>}
              {showMore[4] && (
                <>
                  <br />
                  The content is organized for <span className="font-semibold text-blue-700">easy navigation</span>, and Bootstrap ensures it looks good on any device. This project highlights my <span className="font-semibold text-blue-700">attention to detail</span> and commitment to <span className="font-semibold text-blue-700">accessible, user-friendly design</span>. I plan to add more features and interactivity in the future.
                  <button className="ml-2 text-blue-700 underline" onClick={() => { handleToggle(4); handleToggle(5); }}>See less</button>
                </>
              )}
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={24} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors" />
              </a>
              <a href="https://solo1.rf.gd/index.html#about/" target="_blank" rel="noopener noreferrer" aria-label="Live Link">
                <ExternalLink size={24} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>
        </div>
        {/* project card 6 */}
        <div className="card-bg rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:w-[110%] hover:scale-105">
          <img src={UserManagementSystem} alt="Project 6" className="w-full h-48 object-cover"/>
          <div className="p-4 pb-2">
            <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">User Management System</h2>
            <p className="text-blue-600 dark:text-blue-300 text-sm break-words">
              This <span className="font-semibold text-blue-700">User Management System</span> project was built using <span className="font-semibold text-blue-700">PHP</span>, <span className="font-semibold text-blue-700">CSS</span>, <span className="font-semibold text-blue-700">HTML</span>, and <span className="font-semibold text-blue-700">SQL</span>. I developed it while working on my first project (<span className="font-semibold text-blue-700">Expressloom</span>). It allows for basic user CRUD operations and demonstrates my understanding of backend and frontend integration at an early stage of my learning journey.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/iyousojo/user-management-system/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={24} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors" />
              </a>
              <a href="https://github.com/iyousojo/user-management-system-" target="_blank" rel="noopener noreferrer" aria-label="Live Link">
                <ExternalLink size={24} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Project;