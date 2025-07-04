import { cn } from '@/lib/utility.js'
import { useEffect, useState } from "react";

function Sidebar({ open, onClose, navitems }) {
  const [isDark, setIsDark] = useState(() =>
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("theme-dark")
      : false
  );

  useEffect(() => {
    const observer = () => {
      setIsDark(document.documentElement.classList.contains("theme-dark"));
    };
    const mutation = new MutationObserver(observer);
    mutation.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    observer();
    return () => mutation.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 right-0 h-full w-70 shadow-lg z-[40] transform transition-all ease-in-out duration-300",
        open ? "translate-x-0" : "translate-x-full",
        isDark ? "bg-[#232323] text-white" : "bg-[#f3f3f7] text-black",
        "lg:hidden"
      )}
    >
      <button
        className="absolute top-4 right-2 w-8 h-8 flex flex-col justify-center items-center cursor-pointer"
        onClick={onClose}
        aria-label="Close menu"
      >
        <span className="block w-6 h-0.5 bg-blue-500 mb-1 rotate-45 translate-y-1.5"></span>
        <span className="block w-6 h-0.5 bg-blue-500 -rotate-45 -translate-y-1.5"></span>
      </button>
      <ul className="flex flex-col items-start gap-6 p-8 mt-12">
        {navitems.map((item) => (
          <li key={item.name}>
            <a
              href={`#${item.name}`}
              className='text-base font-medium text-primary hover:text-blue-500 transition-colors hover:[text-shadow:0_0_12px_#3b82f6,0_0_24px_#3b82f6,0_0_48px_#3b82f6] cursor-pointer'
              style={{
                transition: 'text-shadow 0.3s'
              }}
              onClick={onClose}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
