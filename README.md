# Next.js プレゼンテーションシステム

このプロジェクトはNext.jsで構築されたシンプルなプレゼンテーションシステムです。スライドをファイル名の数字のみで管理し、ローカルで完全に動作するプレゼンテーションを作成できます。

## 特徴

- スライドはファイル名の数字のみで順序を管理（1.tsx, 2.tsx, 3.tsx など）
- 完全にローカルで動作（インターネット接続不要）
- キーボードナビゲーション（矢印キーでスライド移動）
- 数字キー（1-9）でスライドに直接ジャンプ
- スライド進行状況のドット表示とスライド番号インジケーター
- スライド枚数を起動時に指定可能

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くとプレゼンテーションが表示されます。

## 使い方

1. アプリを起動すると、スライド枚数を入力する画面が表示されます
2. 読み込みたいスライドの枚数（例：10枚）を入力します
3. 「プレゼンテーションを開始」ボタンをクリックします
4. 指定した枚数のスライド（1.tsx〜10.tsx）が読み込まれます
5. ナビゲーション：
   - **矢印キー**または**前へ/次へボタン**でスライドを移動
   - **数字キー (1-9)** で対応するスライドに直接ジャンプ
   - 画面下部の**ドット**をクリックしてスライド間を移動
6. 画面右上の「リセット」ボタンを押すと、初期設定画面に戻ります

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
│   ├── SlideSetup.tsx
│   └── SlideTemplate.tsx
├── hooks/
│   ├── useSlideNavigation.ts
│   └── useSlides.ts
└── types/
    └── index.ts
```

## 注意点

- スライドファイルは事前に作成しておく必要があります
- 指定した枚数のスライドが存在しない場合、エラーメッセージが表示されます
- スライドは最大50枚まで指定可能です
