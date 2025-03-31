# Next.js プレゼンテーションシステム

このプロジェクトはNext.jsで構築されたシンプルなプレゼンテーションシステムです。スライドをファイル名の数字のみで管理し、ローカルで完全に動作するプレゼンテーションを作成できます。

## 特徴

- スライドはファイル名の数字のみで順序を管理（1.tsx, 2.tsx, 3.tsx など）
- 完全にローカルで動作（インターネット接続不要）
- キーボードナビゲーション（矢印キーでスライド移動）
- 数字キー（1-9）でスライドに直接ジャンプ
- スライド進行状況のドット表示とスライド番号インジケーター
- Reactコンポーネントベースのスライド作成
- レスポンシブデザイン

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くとプレゼンテーションが表示されます。

## スライドの追加方法

スライドを追加するには、`src/app/slides` フォルダに数字をファイル名とした新しいTSXファイルを作成します。

例えば、4番目のスライドを追加するには:

1. `src/app/slides/4.tsx` を作成
2. 以下のテンプレートを使用:

```tsx
import React from 'react';
import { SlideTemplate } from '@/components/SlideTemplate';

export default function Slide4() {
  return (
    <SlideTemplate
      title="新しいスライド"
      subtitle="サブタイトル"
    >
      <div className="mt-8">
        {/* スライドのコンテンツをここに記述 */}
        <p>スライドの内容...</p>
      </div>
    </SlideTemplate>
  );
}
```

## スライドの順序変更

スライドの順序を変更するには、ファイル名を変更するだけです。例えば:

- `3.tsx` を `4.tsx` に変更すると、そのスライドは4番目に表示されます
- `2.tsx` を `1.tsx` に変更すると、そのスライドは最初に表示されます

## プロジェクト構成

```
src/
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
    └── index.ts
```

## 使用方法

- **矢印キー** または **前へ/次へボタン** でスライドを移動
- **数字キー (1-9)** で対応するスライドに直接ジャンプ
- 画面下部の **ドット** をクリックしてスライド間を移動
- スライド番号インジケーター（例: 3/10）で現在位置を確認

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
