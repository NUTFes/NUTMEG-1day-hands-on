## UserのCRUDを作成する

# TODOアプリを作成しましょう
以下の手順でTODOアプリを作成していきます。
1. taskモデルを作成する
2. TaskモデルのCRUDを作成する
3. ルーティングを設定する

## 構造体とは？
関連するデータをまとめて扱うためのデータ型。構造体の中に構造体を入れることもできる。
例) 人間の構造体
Human型の構造体を作成する。
Humanのもつデータは、名前と年齢。
Golangでは、構造体の定義は以下のように記述する。
```
type Human struct {
    Name string
    Age int
}
```

## モデルの定義
モデルとは、DBのテーブルを表す構造体のこと。
Gormを利用すると、構造体をそのままテーブルに変換してくれる。また、制約条件を構造体に記述することで、DBの制約条件を自動で設定してくれる。
以下はIDを主キーとして、名前は必須項目として、作成日時、更新日時、削除日時を自動で設定する構造体の例。
```
type Model struct {
    ID        uint `gorm:"primary_key"`
    Name      string `gorm:"not null"`
    CreatedAt time.Time
    UpdatedAt time.Time
    DeletedAt *time.Time
}
```

## Taskモデルの定義
TODO:　Task構造体を作成しましょう。
Taskが持つデータは、以下の通り。
- ID(主キー)
- Task名(not null)
- Taskの内容(not null)
- taskの状態(not null)
- 作成日時(not null)
- 更新日時(not null)

## シードデータの作成
TODO: シードデータを挿入するためのメソッドを作成し、main.goで呼び出しましょう。

実装例
```
func creatSeed() {
	tasks := []Task{
		{
			Id:        1,
			TaskName:  "backend",
			Content:   "Create user API",
			Status:    "doing",
			UserName:  "nutmeg man",
			CreatedAt: time.Now(),
			UpdatedAt: time.Now(),
		},
		{
			Id:        2,
			TaskName:  "backend",
			Content:   "Create task API",
			Status:    "doing",
			UserName:  "nutmeg man2",
			CreatedAt: time.Now(),
			UpdatedAt: time.Now(),
		},
	}

	DB.Create(&tasks)
}
```

### CRUDとは何か？
CRUDとは、永続的なデータを取り扱うソフトウェアに要求される4つの基本機能である、データの作成（Create）、読み出し（Read）、更新（Update）、削除（Delete）の頭文字を繋げた語。

## 全ユーザーを取得するメソッドの作成
全ユーザーを取得するメソッドを作成しましょう。
実装例
```
func getTasks(c echo.Context) error {
	tasks := []Task{}
	DB.Find(&tasks)
	return c.JSON(http.StatusOK, tasks)
}
```

## ユーザーを作成するメソッドの作成
```
実装例
func createTask(c echo.Context) error {
	taskName := c.QueryParam("task_name")
	content := c.QueryParam("content")
	status := c.QueryParam("status")
	userName := c.QueryParam("user_name")
	task := Task{
		TaskName:  taskName,
		Content:   content,
		Status:    status,
		UserName:  userName,
		CreatedAt: time.Now(),
		UpdatedAt: time.Now(),
	}
	DB.Create(&task)
	return c.JSON(http.StatusOK, task)
```

TODO:
以下のメソッドを作成しましょう
- idを指定したタスクを取得するメソッド
- idを指定したタスクを更新するメソッド
- idを指定したタスクを削除するメソッド

# ルーティングを設定しよう
`main.go`に以下を記述する。
```
# 全タスクを取得するルーティング
e.GET("/tasks", getTasks)
```
TODO:
以下のルーティングを設定しましょう。
- タスクを作成するルーティング
- idを指定したタスクを取得するルーティング
- idを指定したタスクを更新するルーティング
- idを指定したタスクを削除するルーティング

