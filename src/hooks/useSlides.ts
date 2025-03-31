import { useEffect, useState } from 'react';
import { Slide } from '@/types';
import React from 'react';

type SlideModule = {
  default: React.ComponentType;
};

// Next.jsのdynamic importを使用してスライドを読み込むために変更
export function useSlides() {
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

        // Next.jsでは動的インポートを使用するため、別の方法でスライドを読み込む
        // このアプローチはクライアントサイドでのみ動作する
        const importSlide = async (id: string): Promise<Slide | null> => {
          try {
            // 動的インポート
            const module = await import(`@/app/slides/${id}.tsx`) as SlideModule;
            const SlideComponent = module.default;
            
            return {
              id,
              content: React.createElement(SlideComponent)
            };
          } catch (err) {
            console.error(`Failed to load slide ${id}:`, err);
            return null;
          }
        };

        // 例としてスライド1から5を読み込む
        // 実際のアプリでは、APIやファイルシステムを使用して利用可能なスライドを把握する
        const slideIds = ['1', '2', '3', '4', '5'];
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

    loadSlides();
  }, []);

  return { slides, loading, error };
} 