# 青山会計事務所（架空サイト）

会計事務所を想定したコーポレートサイトです。  
デザインカンプをもとに、HTML / SCSS / JavaScriptで静的コーディングを行いました。

## URL

- サイトURL：[https://matsuyamarikiya.jp/aoyama-accounting/](https://matsuyamarikiya.jp/aoyama-accounting/)

## 使用技術

- HTML
- SCSS
- JavaScript
- Git / GitHub
- swiperライブラリ

## 実装機能

- レスポンシブ対応
- ヘッダー背景 表示・非表示 (IntersectionObserver)
- ドロワーメニュー
- カルーセルスライダー (Swiper)
- お問い合わせフォーム (バリデーションチェック/入力値保存)
- 入力値確認画面 (入力値反映)

## ディレクトリ構成

```text
frontend
│
├── sass
├── js
├── img
├── css
├── fonts
│
├── feature
│   ├── img
│   └── index.html
│
├── service
│   ├── img
│   └── index.html
│
├── about
│   ├── img
│   └── index.html
│
├── news
│   ├── img
│   ├── index.html
│   └── detail
│       ├── img
│       └── index.html
│
├── voice
│   ├── img
│   ├── index.html
│   └── detail
│       ├── img
│       └── index.html
│
├── contact
│   ├── img
│   ├── index.html
│   ├── confirm
│   │   └── index.html
│   └── thanks
│       └── index.html
│
├── privacy-policy
│   └── index.html
|
├── page-404
│   └── index.html
│
└── index.html
```

## Git運用で意識したこと

- mainブランチで直接作業は行わず、ページごとにブランチを作成して開発。  
  これによって、作業内容を整理しやすくし、どのページでどのような変更を行ったのかを分かりやすく管理できるようにした。

- Gitでのコミットは「serviceページのボタン修正」「レスポンシブ対応」など、機能単位でコミットメッセージを分けて管理。  
  これによって、変更履歴や修正内容を細かく追いやすくし、問題発生時にも該当箇所を確認しやすい運用を意識した。

- GitHubでのマージ時は「serviceページを構築」など、ページ単位で作業内容が分かるメッセージを記載して管理。  
  これによって、GitHub上では開発内容を大きな作業単位で整理し、全体の進捗や実装内容を把握しやすい構成を意識した。
