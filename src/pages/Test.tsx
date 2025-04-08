import React, { useEffect, useRef } from 'react';

const Test: React.FC = () => {
  // Type the refs to HTML elements
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const trail = trailRef.current;

    if (!container || !trail) return;

    const updateTrailPosition = () => {
      const rect = container.getBoundingClientRect();
      trail.style.left = `${rect.left}px`;
      trail.style.top = `${rect.top}px`;
      trail.style.width = `${rect.width}px`;
      trail.style.height = `${rect.height}px`;
    };

    updateTrailPosition();
    window.addEventListener('resize', updateTrailPosition);
    window.addEventListener('scroll', updateTrailPosition);

    return () => {
      window.removeEventListener('resize', updateTrailPosition);
      window.removeEventListener('scroll', updateTrailPosition);
    };
  }, []);

  return (
    <div style={{ position: 'relative', padding: '100px' }}>
      {/* Background trail that follows the container */}
      <div
        ref={trailRef}
        style={{
          position: 'fixed',
          background: 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 80%)',
          zIndex: 0,
          borderRadius: '16px',
          pointerEvents: 'none',
          transition: 'all 0.3s ease',
        }}
      ></div>

      {/* Foreground image container */}
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          zIndex: 1,
          width: '300px',
          height: '200px',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        }}
      >
        <img
          src="https://picsum.photos/300/200"
          alt="Sample"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default Test;
