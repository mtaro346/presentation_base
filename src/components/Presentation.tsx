import React from 'react';
import { SlideContainer } from './SlideContainer';
import { SlideControls } from './SlideControls';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { useSlides } from '@/hooks/useSlides';

export function Presentation() {
  const { slides, loading, error } = useSlides();
  const { currentSlideIndex, totalSlides, goToNext, goToPrev, jumpToSlide } = useSlideNavigation(slides.length);
  
  const currentSlide = slides[currentSlideIndex] || null;

  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-black text-white">
        <p className="text-2xl">読み込み中...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-black text-white">
        <div className="text-center">
          <p className="text-2xl text-red-500">エラー</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (slides.length === 0) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-black text-white">
        <div className="text-center">
          <p className="text-2xl">スライドがありません</p>
          <p className="mt-2">src/app/slides フォルダに数字のファイル名 (1.tsx, 2.tsx, ...) でスライドを追加してください</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-screen h-screen bg-black text-white overflow-hidden">
      <div className="w-full h-full">
        {slides.map((slide, index) => (
          <SlideContainer
            key={slide.id}
            slide={slide}
            isActive={currentSlideIndex === index}
          />
        ))}
      </div>

      <SlideControls
        onNext={goToNext}
        onPrev={goToPrev}
        onJump={jumpToSlide}
        currentSlideIndex={currentSlideIndex}
        totalSlides={totalSlides}
      />
    </div>
  );
} 