// components/MatrixRain.tsx
import React, { useState } from "react";
import "../styles/MatrixRain.css";

interface Stream {
  id: number;
  x: number;
  y: number;
  char: string;
}

const characters = "01";

const getRandomChar = () =>
  characters.charAt(Math.floor(Math.random() * characters.length));

const MatrixRain: React.FC = () => {
  const [streams, setStreams] = useState<Stream[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX;
    const y = e.clientY;

    const newStream: Stream = {
      id: Date.now(), // unique id
      x,
      y,
      char: getRandomChar(),
    };

    // Append new stream to the existing streams (no replacement)
    setStreams((prevStreams) => [...prevStreams, newStream]);

    // Optionally, clean up old streams if you want them to disappear after a time
    setTimeout(() => {
      setStreams((prevStreams) =>
        prevStreams.filter((stream) => stream.id !== newStream.id)
      );
    }, 2000); // match your animation duration
  };

  return (
    <div className="matrix-interactive-container" onClick={handleClick}>
      {streams.map((stream) => (
        <div
          key={stream.id}
          className="matrix-stream"
          style={{
            left: stream.x,
            top: stream.y,
            animationDuration: "2s", // match your desired animation time
          }}
        >
          {stream.char}
        </div>
      ))}
    </div>
  );
};

export default MatrixRain;
