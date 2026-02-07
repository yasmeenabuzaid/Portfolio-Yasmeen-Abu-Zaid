import { useState, useEffect } from 'react';

/**
 * useScrollSpy
 * Custom hook to track the currently active section on the page
 * and detect if the user has scrolled down.
 * Returns:
 * - activeSection: string of the current section id
 * - isScrolled: boolean indicating if page scroll > 50px
 */
export const useScrollSpy = () => {

  // 1. Setup state for active section and scroll detection
  const [activeSection, setActiveSection] = useState('home'); // default section
  const [isScrolled, setIsScrolled] = useState(false);        // detect scroll past threshold

  useEffect(() => {

    // 2. Define scroll event handler
    const handleScroll = () => {

      // 2a. Check if user scrolled more than 50px
      setIsScrolled(window.scrollY > 50);

      // 2b. List of section IDs to track
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

      // 2c. Find the section currently in view
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top < window.innerHeight / 2;
        }
        return false;
      });

      // 2d. Update active section state
      if (current) setActiveSection(current);
    };

    // 3. Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // 4. Cleanup: remove scroll listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);

  }, []); // run only once when component mounts

  // 5. Return values
  return { activeSection, isScrolled };
};
