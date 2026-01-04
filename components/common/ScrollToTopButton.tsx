import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
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
    <button
      onClick={scrollToTop}
      className={`
        fixed z-40 p-3.5 rounded-full shadow-lg border border-gray-100 
        transition-all duration-500 ease-in-out transform hover:scale-110 focus:outline-none
        bg-white/90 backdrop-blur-sm text-gray-400 hover:text-orange-500 hover:border-orange-100 hover:shadow-orange-100/50
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        bottom-24 right-4 md:bottom-8 md:right-8
      `}
      aria-label="ページトップへ戻る"
    >
      <ArrowUp size={20} strokeWidth={1.5} />
    </button>
  );
};