import React from 'react';
import { SlideTemplate } from '@/components/SlideTemplate';

export default function Slide3() {
  return (
    <SlideTemplate
      title="AIを活用した業務効率化の実例"
      subtitle="導入事例とその効果"
    >
      <div className="mt-8 space-y-8">
        <div className="bg-blue-900/30 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">事例1: 営業部門でのAI活用</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="space-y-2">
              <p className="font-semibold text-white/90">導入前の課題:</p>
              <ul className="list-disc pl-5 space-y-1 text-white/80">
                <li>顧客対応に時間がかかる</li>
                <li>提案資料作成の工数が大きい</li>
                <li>市場動向の把握が遅れがち</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-white/90">AI導入後の変化:</p>
              <ul className="list-disc pl-5 space-y-1 text-white/80">
                <li>顧客対応時間が40%短縮</li>
                <li>提案資料作成が3倍速く</li>
                <li>市場分析の精度向上</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-900/30 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-purple-400 mb-4">事例2: カスタマーサポートの強化</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="space-y-2">
              <p className="font-semibold text-white/90">導入前の課題:</p>
              <ul className="list-disc pl-5 space-y-1 text-white/80">
                <li>サポート対応の遅延</li>
                <li>FAQの検索が困難</li>
                <li>夜間対応ができない</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-white/90">AI導入後の変化:</p>
              <ul className="list-disc pl-5 space-y-1 text-white/80">
                <li>一次対応が即時化</li>
                <li>情報検索が10倍速く</li>
                <li>24時間対応が可能に</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center text-white/90">
          <p className="text-xl">共通する効果: <span className="text-green-400 font-bold">コスト削減・顧客満足度向上・従業員の業務満足度アップ</span></p>
        </div>
      </div>
    </SlideTemplate>
  );
} 