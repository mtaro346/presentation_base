import React from 'react';
import { SlideControlProps } from '@/types';

export function SlideControls({
  onNext,
  onPrev,
  onJump,
  currentSlideIndex,
  totalSlides
}: SlideControlProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between p-4 bg-gradient-to-t from-slate-100/80 to-transparent z-10 shadow-sm border-t border-slate-200">
      <div className="flex gap-2">
        <button
          onClick={onPrev}
          disabled={currentSlideIndex === 0}
          className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md shadow-sm disabled:opacity-30 disabled:cursor-not-allowed transition"
        >
          前へ
        </button>
        <button
          onClick={onNext}
          disabled={currentSlideIndex === totalSlides - 1}
          className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md shadow-sm disabled:opacity-30 disabled:cursor-not-allowed transition"
        >
          次へ
        </button>
      </div>

      <div className="text-slate-700 font-mono">
        {currentSlideIndex + 1} / {totalSlides}
      </div>

      <div className="flex items-center gap-1">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onJump(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlideIndex
                ? 'bg-blue-600 scale-125'
                : 'bg-slate-400 hover:bg-blue-400'
            }`}
            aria-label={`スライド ${index + 1} へジャンプ`}
          />
        ))}
      </div>
    </div>
  );
} 