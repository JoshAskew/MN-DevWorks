// components/Rainfall.tsx
import React, { useRef } from "react";
import "../styles/Rainfall.css"; // Import your CSS file for styling

interface RainfallProps {
  dropCount: number;
}

const Rainfall: React.FC<RainfallProps> = ({ dropCount }) => {
  const generateRain = (count: number) => {
    return Array.from({ length: count }).map((_, i) => {
      const dropRef = useRef<HTMLDivElement>(null);

      const handleAnimationEnd = () => {
        const drop = dropRef.current;
        if (drop) {
          const splash = document.createElement("div");
          splash.className = "splash";

          // Get final position of the drop
          const rect = drop.getBoundingClientRect();
          splash.style.left = `${rect.left + window.scrollX}px`;
          splash.style.top = `${rect.top + window.scrollY + 5}px`;

          document.body.appendChild(splash);

          setTimeout(() => splash.remove(), 400);
        }
      };

      const style = {
        left: `${Math.random() * 100}%`,
        animationDuration: `${1 + Math.random() * 2}s`,
        animationDelay: `${Math.random() * 5}s`,
        top: `-${Math.random() * 100}px`,
      };

      return (
        <div
          className="raindrop"
          style={style}
          key={`drop-${i}`}
          ref={dropRef}
          onAnimationEnd={handleAnimationEnd}
        />
      );
    });
  };

  return <div className="rain-container">{generateRain(dropCount)}</div>;
};

export default Rainfall;
