# React + TypeScript + Vite + tailwind css + shadcn/ui
reactでweb制作を行うテンプレートです  
cssはtailwind cssを採用しています  
マルチページ対応です  

## src内の構成
assets -- 画像やpdf
components -- shadcn/uiで生成されたコンポーネント
HTMLComponents -- headタグ用のhtmlとメタタグ設定用のjson
layouts -- ヘッダーやフッターなどの共通で読み込むコンポーネント 
pages -- エントリーポイント用のファイル
sections -- sectionタグで仕切られるコンポーネント

## ルーティング
/src/pages/以下のページ構成が反映されます  
build時にvite.config.tsのrollupOptionsで設定する必要があります