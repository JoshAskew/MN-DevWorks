
import React from "react";
import "../styles/MatrixRain.css";

interface MatrixRainProps {
  dropCount: number;
}

const characters = "01";

const MatrixRain: React.FC<MatrixRainProps> = ({ dropCount }) => {
  const getRandomChar = () =>
    characters.charAt(Math.floor(Math.random() * characters.length));

  const generateRain = (count: number) => {
    return Array.from({ length: count }).map((_, i) => {
      const style = {
        left: `${Math.random() * 100}%`,
        animationDuration: `${1.5 + Math.random() * 2.5}s`,
        animationDelay: `${Math.random() * 5}s`,
        top: `-${Math.random() * 100}px`,
      };

      return (
        <div
          className="matrix-drop"
          style={style}
          key={`char-${i}`}
        >
          {getRandomChar()}
        </div>
      );
    });
  };

  return <div className="matrix-container">{generateRain(dropCount)}</div>;
};

export default MatrixRain;
