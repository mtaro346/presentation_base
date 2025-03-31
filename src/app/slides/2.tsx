import React from 'react';
import { SlideTemplate } from '@/components/SlideTemplate';

export default function Slide2() {
  return (
    <SlideTemplate
      title="最新のAI技術トレンド"
      subtitle="2025年の主要な技術動向"
    >
      <div className="mt-8 grid grid-cols-2 gap-8">
        <div className="bg-white/10 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">生成AI</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-2 text-green-400 text-xl">•</span>
              <span>テキスト・画像・音声の高度な生成能力</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-400 text-xl">•</span>
              <span>マルチモーダルモデルの普及</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-400 text-xl">•</span>
              <span>専門分野に特化したモデルの台頭</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white/10 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">企業でのAI活用</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-2 text-green-400 text-xl">•</span>
              <span>社内AIアシスタントの導入</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-400 text-xl">•</span>
              <span>データ分析の自動化・高度化</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-400 text-xl">•</span>
              <span>業務プロセスの効率化</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white/10 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">AIの進化</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-2 text-green-400 text-xl">•</span>
              <span>推論能力の向上</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-400 text-xl">•</span>
              <span>リアルタイム学習と適応</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-400 text-xl">•</span>
              <span>エネルギー効率の改善</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white/10 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">プロンプトエンジニアリング</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="mr-2 text-green-400 text-xl">•</span>
              <span>専門職としての確立</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-400 text-xl">•</span>
              <span>体系的な手法の発展</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-400 text-xl">•</span>
              <span>業界別のベストプラクティス</span>
            </li>
          </ul>
        </div>
      </div>
    </SlideTemplate>
  );
} 