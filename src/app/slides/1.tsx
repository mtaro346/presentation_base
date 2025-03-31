import React from 'react';
import { SlideTemplate } from '@/components/SlideTemplate';

export default function Slide1() {
  return (
    <SlideTemplate
      title="AI活用講座"
      subtitle="ビジネスを変革する最新AI技術の活用法"
    >
      <div className="mt-12 flex flex-col items-center">
        <div className="text-4xl font-bold text-blue-400 mb-8">ようこそ</div>
        <ul className="text-xl space-y-6">
          <li className="flex items-center">
            <span className="mr-3 text-2xl">🚀</span>
            <span>今日のゴール: AIを理解し、業務に活かすスキルを身につける</span>
          </li>
          <li className="flex items-center">
            <span className="mr-3 text-2xl">🔍</span>
            <span>最新のAI技術トレンドを学ぶ</span>
          </li>
          <li className="flex items-center">
            <span className="mr-3 text-2xl">💡</span>
            <span>実践的な活用例を通じて理解を深める</span>
          </li>
        </ul>
        <div className="mt-16 text-sm text-white/60">
          ※ 矢印キー(←→)でスライドを進めることができます
        </div>
      </div>
    </SlideTemplate>
  );
} 