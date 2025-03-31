import React, { useState } from 'react';

interface SlideSetupProps {
  onSetupComplete: (totalSlides: number) => void;
}

export function SlideSetup({ onSetupComplete }: SlideSetupProps) {
  const [slideCount, setSlideCount] = useState<string>('3');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const count = parseInt(slideCount, 10);
    
    if (isNaN(count) || count <= 0) {
      setError('有効な数字を入力してください');
      return;
    }
    
    if (count > 50) {
      setError('スライド数は50以下にしてください');
      return;
    }
    
    onSetupComplete(count);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-background text-foreground">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md border border-slate-200">
        <h1 className="text-2xl font-bold mb-6 text-center text-slate-800">プレゼンテーションセットアップ</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="slideCount" className="block mb-2 text-lg text-slate-700">
              スライド枚数を入力してください
            </label>
            <input
              id="slideCount"
              type="number"
              value={slideCount}
              onChange={(e) => setSlideCount(e.target.value)}
              min="1"
              max="50"
              className="w-full px-4 py-2 bg-slate-50 rounded-md text-slate-800 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="mt-2 text-sm text-slate-600">
              ※ スライドは 1.tsx から {slideCount}.tsx まで読み込まれます
            </p>
          </div>
          
          {error && (
            <div className="text-red-500 text-sm">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors shadow-sm"
          >
            プレゼンテーションを開始
          </button>
        </form>
      </div>
    </div>
  );
} 