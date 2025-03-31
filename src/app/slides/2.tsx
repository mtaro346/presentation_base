import React from 'react';
import { SlideTemplate } from '@/components/SlideTemplate';

export default function Slide2() {
  return (
    <SlideTemplate
      title="プレゼンテーションの特徴"
      subtitle="簡単に拡張可能なシステム"
    >
      <div className="mt-8">
        <ul className="space-y-6 text-xl">
          <li className="flex items-start">
            <span className="mr-3 text-blue-500 font-bold">✓</span>
            <span>ファイル名の数字のみで順序を管理（1.tsx, 2.tsx, 3.tsx...）</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-blue-500 font-bold">✓</span>
            <span>スライドは単なるReactコンポーネント</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-blue-500 font-bold">✓</span>
            <span>完全にローカルで動作（インターネット接続不要）</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-blue-500 font-bold">✓</span>
            <span>キーボードナビゲーションとビジュアルインジケーター</span>
          </li>
        </ul>
      </div>
    </SlideTemplate>
  );
} 