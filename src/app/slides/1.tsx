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
          <li className="flex items-start">
            <span className="mr-2 text-blue-500">●</span>
            <span>キーボードの矢印キーで移動できます</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-500">●</span>
            <span>数字キー(1-9)でスライドに直接ジャンプできます</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-500">●</span>
            <span>下部のドットをクリックしてスライド間を移動できます</span>
          </li>
        </ul>
      </div>
    </SlideTemplate>
  );
} 