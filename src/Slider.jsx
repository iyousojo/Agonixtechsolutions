import { useState, useEffect, useRef } from "react";
import Banner from "./Bannner.jsx";
import Banner2 from "./Banner2.jsx";

const components = [Banner, Banner2];

function Slider() {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
  const timeoutRef = useRef();

  // Slide to new index with direction
  const slideTo = (newIdx, dir = 1) => {
    setDirection(dir);
    setIdx(newIdx);
  };

  // Auto-slide every 10 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      slideTo((idx + 1) % components.length, 1);
    }, 20000);
    return () => clearTimeout(timeoutRef.current);
  }, [idx]);

    // Handle window resize to reset index if necessary                 

  // For sliding effect, render both current and previous/next component, and animate their positions
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="w-full h-full flex">
        {/* Sliding container */}
        <div
          className={`w-full h-full flex transition-transform duration-500 ease-in-out`}
          style={{
            transform:
              direction === 1
                ? `translateX(-${idx * 100}%)`
                : `translateX(-${idx * 100}%)`,
          }}
        >
          {components.map((Comp, i) => (
            <div key={i} className="w-full h-full flex-shrink-0">
              <Comp key={idx === i ? `active-${idx}` : `inactive-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
