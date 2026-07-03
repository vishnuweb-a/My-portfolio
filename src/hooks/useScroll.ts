import { useCallback, useEffect, useState } from 'react';

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      setScrollY(y);
      setIsScrolled(y > 20);
    }

    // Use passive listener for performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, isScrolled };
}

export function useScrollTo() {
  const scrollTo = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 64; // matches --nav-height
      const y = element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  return scrollTo;
}
