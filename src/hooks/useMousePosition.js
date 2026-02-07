import { useState, useEffect } from 'react';

/**
 * useMousePosition
 * Custom hook to track the mouse cursor position on the screen.
 * Returns an object: { x, y }.
 */
export const useMousePosition = () => {

  // 1. Setup state to store mouse coordinates
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {

    // 2. Define event handler for mouse movement
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY }); // update state with cursor position
    };

    // 3. Attach mousemove event listener
    window.addEventListener('mousemove', handleMouseMove);

    // 4. Cleanup: remove event listener on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };

  }, []); // run only once when component mounts

  // 5. Return the current mouse position
  return mousePosition;
};
