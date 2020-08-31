# 乃木坂 API

乃木坂のメンバー管理及び、曲ごとの選抜メンバーの管理ができる API です。

## API の内容

### メンバー

- `GET /api/members`
  - 全てのメンバーの情報を返します
- `GET /api/members/search/:member`
  - メンバーの名前で曖昧検索した結果を返します
- `POST /api/members/:member`
  - 指定した名前のメンバーを追加します
- `PATCH /api/members/:before/:after`
  - 指定した名前のメンバーの名前を変更します
- `DELETE /api/members/:member`
  - 指定したメンバーを削除します

### 曲

- `GET /api/songs`
  - 全ての曲の情報を返します
- `GET /api/songs/search/:song`
  - 曲の名前で曖昧検索した結果を返します
- `POST /api/songs/:song`
  - 指定した名前の曲を追加します
- `PATCH /api/songs/:before/:after`
  - 指定した曲の名前を変更します
- `DELETE /api/songs/:song`
  - 指定した曲を削除します
