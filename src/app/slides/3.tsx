import React from 'react';
import { SlideTemplate } from '@/components/SlideTemplate';

export default function Slide3() {
  return (
    <SlideTemplate
      title="スライドの構成"
      subtitle="拡張性と柔軟性"
    >
      <div className="mt-8 text-xl space-y-8">
        <p className="text-slate-700">
          プロジェクトは次のように構成されています：
        </p>
        
        <div className="bg-slate-100 p-4 rounded-lg shadow-sm font-mono text-base text-slate-700 border border-slate-200">
          <pre>
{`src/
├── app/
│   ├── slides/  <- ここにスライド（1.tsx, 2.tsx,...）を追加
│   └── page.tsx
├── components/
│   ├── Presentation.tsx
│   ├── SlideContainer.tsx
│   ├── SlideControls.tsx
│   └── SlideTemplate.tsx
├── hooks/
│   ├── useSlideNavigation.ts
│   └── useSlides.ts
└── types/
    └── index.ts`}
          </pre>
        </div>
        
        <p className="text-blue-600 font-medium">
          新しいスライドを追加するには、単にsrc/app/slides/フォルダに数字のファイル名でTSXファイルを作成するだけです。
        </p>
      </div>
    </SlideTemplate>
  );
} 