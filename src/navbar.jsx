import { cn } from '@/lib/utility.js'
import { useEffect, useState } from "react"
import Sidebar from "./Sidebar.jsx"
import ThemeToggle from "./themeToggle.jsx";

const navitems = [
    {name: "Home", href: "#Home"},
    {name: "About", href: "#About"},
    {name: "Skill", href: "#Skill"},
    {name: "Project", href: "#Project"},
    {name: "Contact", href: "#Contact"}
];

function Navbar (){
   const [isscrolled, setIsscrolled] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);

   // Always sync with theme class on html (fixes initial white navbar)
   const getIsDark = () =>
      typeof window !== "undefined"
        ? document.documentElement.classList.contains("theme-dark")
        : false;

   const [isDark, setIsDark] = useState(getIsDark);

   // Only handle navigation for known routes
   const knownRoutes = ["/", "/about", "/skill", "/project", "/contact"];

   useEffect(() => {
      const observer = () => {
         setIsDark(document.documentElement.classList.contains("theme-dark"));
      };
      // Listen for class changes on html
      const mutation = new MutationObserver(observer);
      mutation.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
      // Also update on mount
      observer();
      return () => {
         mutation.disconnect();
      };
   }, []);

   useEffect(() => {
      const handleScroll = () => {
         setIsscrolled(window.scrollY > 0);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return(
     <nav className={cn(
      "fixed top-0 left-0 w-full z-40 transition-all duration-300",
      isDark ? "bg-[#1A1A1A]" : "bg-[#f3f3f7]",
      isscrolled ? (isDark ? "py-10 bg-[#2c2c2c] shadow-xs" : "py-2 bg-white backdrop-md shadow-xs") : "py-3",
      "py-2 sm:py-1 md:py-1 lg:py-5"
     )}>
     <div className='container mx-auto flex items-center justify-between px-1 sm:px-2'>
       <a
         className='text-xl fontbold text-primary flex items-center pr-4 cursor-pointer'
         href="#Home"
         style={{ textDecoration: "none" }}
       >
         <span className='relative z-10'>
           <span
            className={cn(isDark ? "text-white" : "text-black", "glow-blue")}
            style={{
              textShadow: '0 0 12px #3b82f6, 0 0 24px #3b82f6, 0 0 48px #3b82f6'
            }}
           >
            Solomon
           </span>{" "}
           <span className={isDark ? "text-white" : "text-black"}>
             portfolio
           </span>
         </span>
       </a>
       {/* Center toggle button */}
       <div className="flex-1 flex justify-center">
         <ThemeToggle glow />
       </div>
       {/* Burger menu button for small screens */}
       {!menuOpen && (
         <button
           className={cn(
             "lg:hidden flex flex-col justify-center items-center w-10 h-16 ml-0",
             isDark ? "glow-blue" : ""
           )}
           onClick={() => setMenuOpen(true)}
           aria-label="Toggle menu"
         >
           <span className={`block w-6 h-0.5 bg-blue-500 mb-1 transition-all`}></span>
           <span className={`block w-6 h-0.5 bg-blue-500 mb-1 transition-all`}></span>
           <span className={`block w-6 h-0.5 bg-blue-500 transition-all`}></span>
         </button>
       )}
       {/*nav items*/}
       <ul className={cn(
         "hidden lg:flex items-center gap-6 pl-4"
       )}>
         {navitems.map((item) => (
           <li key={item.name}>
             <a
               href={item.href}
               className={cn(
                 "text-base font-medium transition-colors",
                 isDark ? "glow-blue" : ""
               )}
               style={{
                 cursor: "pointer",
                 transition: 'text-shadow 0.3s'
               }}
             >
               {item.name}
             </a>
           </li>
         ))}
       </ul>
     </div>
     {/* Sidebar for mobile */}
     <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} navitems={navitems} />
     </nav>
   )
};
export default Navbar