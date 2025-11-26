import React, { useState, useEffect } from 'react';

export default function CursorTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      setTrail((prevTrail) => [
        ...prevTrail.slice(-10),
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      >
        <div style={{
          width: '20px',
          height: '20px',
          backgroundColor: 'white',
          borderRadius: '50%',
          boxShadow: '0 0 10px rgba(255,255,255,0.5)'
        }}></div>
      </div>

      {trail.map((point, index) => (
        <div
          key={point.id}
          style={{
            position: 'fixed',
            left: point.x,
            top: point.y,
            transform: 'translate(-50%, -50%)',
            opacity: (index + 1) / trail.length,
            zIndex: 9998,
            pointerEvents: 'none',
          }}
        >
          <div style={{
            width: `${12 - index}px`,
            height: `${12 - index}px`,
            backgroundColor: 'rgba(255,255,255,0.6)',
            borderRadius: '50%',
          }}></div>
        </div>
      ))}
    </>
  );
}