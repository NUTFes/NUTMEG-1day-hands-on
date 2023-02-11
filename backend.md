## echoサーバーを構築する

### echoとは何か？
`Golang`における代表的なWebフレームワークである。

[echo公式](https://echo.labstack.com/)によると高性能で、拡張するのに優れているとのこと
簡単にAPIサーバーを構築したり、corsの設定が可能だったりします。
GoのWebフレームワークはechoの他に[Gin](https://gin-gonic.com/ja/)なども人気です。nutmegでは、FinanSu, lottery, nutmegーslackそれぞれ、echoを利用しています。
今回はechoを利用して、APIサーバーを構築しましょう。

### echoサーバーの構築
`main.go`に以下実装しましょう。
```
package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})
	e.Logger.Fatal(e.Start(":1323"))
```

コンテナを起動するとエラーが発生する。
docker compose up api
![picture 2](images/c159bc05514b0f57f16d788be441c774d0d1cef619115e61f5827035bf9bdb11.png)


### go mod tidy
結論から言うと、上記のエラーは次を実行すると、解決する。
`docker compose run --rm api go mod tidy`
![picture 1](images/da83a7b4b85b8c2996d009b647f8d54a1f04bb99c1ce316248f5233b1bd2457d.png)

`go mod tidy`とは以下の機能を持っています。
- コード内でimportしているがgo getされていないモジュールをダウンロード
- ダウンロードされているがコード内でimportされていないモジュールを削除
- 上記2つを実施したあとにgo.modとgo.sumを修正 または 削除

今回は`main.go`に`"github.com/labstack/echo/v4"`が書いてあったが、echoのモジュールをinstallしていなかったため、エラーが発生した。

[【Go】パッケージ/モジュールやgo modコマンドについてまとめ](https://blog.framinal.life/entry/2021/04/11/013819)

### 確認
[http://localhost:1323/](http://localhost:1323/)で`Hello, World!`が出力されているか確認しよう。

