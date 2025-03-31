import React from 'react';
import { Slide } from '@/types';

interface SlideContainerProps {
  slide: Slide | null;
  isActive: boolean;
}

export function SlideContainer({ slide, isActive }: SlideContainerProps) {
  if (!slide) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <p className="text-2xl text-slate-400">スライドが見つかりません</p>
      </div>
    );
  }

  return (
    <div
      className={`w-full h-full flex items-center justify-center transition-opacity duration-300 ${
        isActive ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'
      }`}
    >
      <div className="max-w-4xl w-full h-full flex items-center justify-center">
        {slide.content}
      </div>
    </div>
  );
} 