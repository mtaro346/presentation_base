import { useState, useEffect, useCallback } from 'react';
import { SlideNavigationState } from '@/types';

export function useSlideNavigation(totalSlides: number): SlideNavigationState & {
  goToNext: () => void;
  goToPrev: () => void;
  jumpToSlide: (slideIndex: number) => void;
} {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentSlideIndex((prevIndex) => 
      prevIndex < totalSlides - 1 ? prevIndex + 1 : prevIndex
    );
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentSlideIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  }, []);

  const jumpToSlide = useCallback((slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex < totalSlides) {
      setCurrentSlideIndex(slideIndex);
    }
  }, [totalSlides]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
        case ' ':
          goToNext();
          break;
        case 'ArrowLeft':
          goToPrev();
          break;
        default:
          // Check if the key is a number from 1 to 9
          const num = parseInt(event.key);
          if (!isNaN(num) && num >= 1 && num <= Math.min(9, totalSlides)) {
            jumpToSlide(num - 1);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNext, goToPrev, jumpToSlide, totalSlides]);

  return {
    currentSlideIndex,
    totalSlides,
    goToNext,
    goToPrev,
    jumpToSlide
  };
} 