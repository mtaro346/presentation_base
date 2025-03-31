import { useEffect, useState } from 'react';
import { Slide } from '@/types';
import React from 'react';

type SlideModule = {
  default: React.ComponentType;
};

// 指定されたスライド枚数に基づいてスライドを読み込む
export function useSlides(totalSlides: number) {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadSlides() {
      try {
        setLoading(true);
        
        // サーバーサイドではないことを確認
        if (typeof window === 'undefined') {
          setSlides([]);
          setLoading(false);
          return;
        }

        // 動的インポート処理
        const importSlide = async (id: string): Promise<Slide | null> => {
          try {
            // 動的インポート - module変数名を変更
            const slideModule = await import(`@/app/slides/${id}.tsx`) as SlideModule;
            const SlideComponent = slideModule.default;
            
            return {
              id,
              content: React.createElement(SlideComponent)
            };
          } catch (err) {
            console.error(`Failed to load slide ${id}:`, err);
            return null;
          }
        };

        // 指定された枚数に基づいてスライドIDを生成
        const slideIds = Array.from({ length: totalSlides }, (_, i) => (i + 1).toString());
        
        // スライドを読み込む
        const loadedSlides = await Promise.all(
          slideIds.map(importSlide)
        );
        
        // nullでないスライドのみをフィルタリング
        const validSlides = loadedSlides.filter((slide): slide is Slide => slide !== null);
        
        // 数字順にソート
        validSlides.sort((a, b) => parseInt(a.id) - parseInt(b.id));
        
        setSlides(validSlides);
        setLoading(false);
      } catch (err) {
        console.error('Failed to load slides:', err);
        setError('スライドの読み込みに失敗しました');
        setLoading(false);
      }
    }

    // totalSlidesが正の値である場合にのみスライドを読み込む
    if (totalSlides > 0) {
      loadSlides();
    }
  }, [totalSlides]);

  return { slides, loading, error };
} 