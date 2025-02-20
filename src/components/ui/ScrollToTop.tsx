'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-amber-500 hover:bg-amber-600 text-white
          w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300
          flex items-center justify-center z-50 animate-bounce-slow"
          aria-label="Volver arriba"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </>
  );
}