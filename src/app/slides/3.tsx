import React from 'react';
import { SlideTemplate } from '@/components/SlideTemplate';

export default function Slide3() {
  return (
    <SlideTemplate
      title="スライドの構成"
      subtitle="拡張性と柔軟性"
    >
      <div className="mt-8 text-xl space-y-8">
        <p>
          プロジェクトは次のように構成されています：
        </p>
        
        <div className="bg-white/10 p-4 rounded-lg font-mono text-base">
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
      </div>
    </SlideTemplate>
  );
} 