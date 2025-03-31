import React, { useState } from 'react';
import { SlideContainer } from './SlideContainer';
import { SlideControls } from './SlideControls';
import { SlideSetup } from './SlideSetup';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { useSlides } from '@/hooks/useSlides';

export function Presentation() {
  // スライド枚数の状態管理
  const [totalSlideCount, setTotalSlideCount] = useState<number | null>(null);
  
  // セットアップが完了していない場合はセットアップ画面を表示
  if (totalSlideCount === null) {
    return <SlideSetup onSetupComplete={setTotalSlideCount} />;
  }
  
  // セットアップが完了したらスライドを読み込む
  return <PresentationView totalSlides={totalSlideCount} />;
}

// プレゼンテーション表示用コンポーネント
function PresentationView({ totalSlides }: { totalSlides: number }) {
  const { slides, loading, error } = useSlides(totalSlides);
  const { 
    currentSlideIndex, 
    totalSlides: navigationTotalSlides, 
    goToNext, 
    goToPrev, 
    jumpToSlide 
  } = useSlideNavigation(slides.length);
  
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
          <button 
            className="mt-4 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
            onClick={() => window.location.reload()}
          >
            再試行
          </button>
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
          <button 
            className="mt-4 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
            onClick={() => window.location.reload()}
          >
            初めから始める
          </button>
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
        totalSlides={navigationTotalSlides}
      />
      
      <button 
        className="fixed top-4 right-4 text-sm px-3 py-1 bg-white/10 hover:bg-white/20 rounded-md"
        onClick={() => window.location.reload()}
      >
        リセット
      </button>
    </div>
  );
} 