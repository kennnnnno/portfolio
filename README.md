# My Portfolio Site

Next.js (App Router) と Tailwind CSS を使用して構築した、自身のポートフォリオサイトです。
自己紹介、スキルセット、および研究内容をまとめています。

## 公開URL

準備中

## 使用技術

- **Frontend**: Next.js (App Router), TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Render

## こだわり

・ReactではなくNextJsでサーバーサイドレンダリングを使用することで高速なレンダリングを実現

・デモの動画や様々な画像を使用して視認性向上

・スマホ、PCどちらから見てもきれいに見えるようなレスポンシブデザイン(ハンバーガーメニューなど)

## ディレクトリ構造（主要部分）

```text
src/
├── app/ # App Router
| └── k-portfolio/
│    ├── about/ # 自己紹介ページ
│    ├── skills/ # スキル・開発経験
│    ├── research/ # 研究内容
│    ├── link/ # 外部リンク
│    └── Hamburger.tsx/Header.tsx/layout.tsx #常時表示されるヘッダー作成　　　　　　　　　　　　　　
└── public/ # 画像・動画資産
```
