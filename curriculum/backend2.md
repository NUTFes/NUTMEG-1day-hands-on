## DBと接続する

### Gormとは何か?
Golang専用のORMフレームワーク。SQLを書かなくても、DBとやり取りができる。

#### メリット
  - SQLを書かなくてもDBとやり取りができる
  - テーブルの作成やマイグレーションが簡単
  - テストがしやすい
  - ソースコードがシンプルになる
#### デメリット
  - 中身がどのようになっている分かりにくい
  - 複雑なクエリを書くときに苦労する
今回はGormを利用して、DBと接続、操作を行なってみましょう。
[Gorm公式ガイド](https://gorm.io/ja_JP/docs/index.html)

### DBと接続する
TODO: `main.go`にDBを接続するメソッドを作成し、`main()`で呼び出しましょう

実装例
```
var DB *gorm.DB

func sqlConnect() *gorm.DB {
	USER := os.Getenv("MYSQL_USER")
	PASS := os.Getenv("MYSQL_PASSWORD")
	PROTOCOL := "tcp(db:3306)"
	DBNAME := os.Getenv("MYSQL_DATABASE")

	dsn := USER + ":" + PASS + "@" + PROTOCOL + "/" + DBNAME + "?parseTime=true&charset=utf8&loc=Local"
	DB, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(err.Error())
	}
	fmt.Println("db connected")
	return DB
}
```

### `var DB *gorm.DB`とは何か?
DBと接続するための変数。`*gorm.DB`は、gormの構造体。DBと接続するために必要な情報が格納されている。
つまり変数DBは `*gorm.DB`のポインタ型と言える

### os.Getenv()とは何か?
環境変数を取得する関数。今回は、`docker-compose.yml`で設定した値を取得することができる。
今回は以下の値が格納されている。
- `USER`にはnutmeg
- `PASS`にはpassword
- `DBNAME`にはnutmeg_db
環境変数は、外部から見られたくない値や、環境によって変わる値を格納するために利用する。
例) DBのパスワード、APIキー、credentialsなど


### DSNとは何か?
アプリケーションが ODBC データ ソースへの接続を要求するために使用する名前のこと。
今回実際に格納されている値は以下の通り。
```
nutmeg:password@tcp(db:3306)/nutmeg_db?parseTime=true&charset=utf8&loc=Local
```
接続が成功すると、`db connected`と表示される。
環境変数の取得に失敗したり、DBに接続できなかった場合は、panic()でエラーを出力する。

