# MiniBlog

Next.js と Tailwind CSS を使用したシンプルなブログアプリケーションです。

## 機能

- ブログ記事の表示
- お問い合わせフォーム
- レスポンシブデザイン

## 技術スタック

- Next.js 15.3.0
- React 19.0.0
- TypeScript
- Tailwind CSS 4
- ESLint

## 開発環境のセットアップ

1. リポジトリのクローン

```bash
git clone [リポジトリURL]
cd miniblog
```

2. 依存関係のインストール

```bash
npm install
# または
yarn install
```

3. 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
```

4. ブラウザで http://localhost:3000 にアクセス

## プロジェクト構造

```
miniblog/
├── src/
│   ├── app/              # Next.js アプリケーションルート
│   ├── lib/              # ユーティリティ関数やアクション
│   └── _components/      # 共通コンポーネント
├── public/               # 静的ファイル
└── package.json          # プロジェクト設定
```

## スクリプト

- `npm run dev` - 開発サーバーの起動
- `npm run build` - プロダクションビルド
- `npm run start` - プロダクションサーバーの起動
- `npm run lint` - ESLint によるコードチェック

## ライセンス

MIT
