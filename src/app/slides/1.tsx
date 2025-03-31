import React from 'react';
import { SlideTemplate } from '@/components/SlideTemplate';

export default function Slide1() {
  return (
    <SlideTemplate
      title="プレゼンテーションへようこそ"
      subtitle="Next.jsで構築されたシンプルなプレゼンテーションシステム"
    >
      <div className="mt-12 text-xl">
        <ul className="space-y-4">
          <li>• キーボードの矢印キーで移動できます</li>
          <li>• 数字キー(1-9)でスライドに直接ジャンプできます</li>
          <li>• 下部のドットをクリックしてスライド間を移動できます</li>
        </ul>
      </div>
    </SlideTemplate>
  );
} 