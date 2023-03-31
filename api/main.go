package main

import (
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

type Task struct {
	Id        int       `json:"id" gorm:"primary_key"`
	TaskName  string    `json:"taskName" gorm:"not null"`
	Content   string    `json:"content" gorm:"not null"`
	Status    string    `json:"status" gorm:"not null"`
	UserName  string    `json:"userName" gorm:"not null"`
	CreatedAt time.Time `json:"createdAt" gorm:"not null"`
	UpdatedAt time.Time `json:"updatedAt" gorm:"not null"`
}

func getTasks(c echo.Context) error {
	tasks := []Task{}
	DB.Find(&tasks)
	return c.JSON(http.StatusOK, tasks)
}

func getTask(c echo.Context) error {
	id := c.Param("id")
	task := Task{}
	DB.First(&task, id)
	return c.JSON(http.StatusOK, task)
}

func createTask(c echo.Context) error {
	task := new(Task)
	if err := c.Bind(task); err != nil {
		return err
	}
	task.CreatedAt = time.Now()
	task.UpdatedAt = time.Now()
	DB.Create(&task)
	return c.JSON(http.StatusOK, task)
}

func updateTask(c echo.Context) error {
	id := c.Param("id")
	task := new(Task)
	if err := c.Bind(task); err != nil {
		return err
	}
	task.UpdatedAt = time.Now()
	DB.Model(&task).Where("id = ?", id).Updates(task)
	return c.JSON(http.StatusOK, task)
}

func deleteTask(c echo.Context) error {
	id := c.Param("id")
	task := Task{}
	DB.Delete(&task, id)
	return c.JSON(http.StatusOK, task)
}

func creatSeed() {
	tasks := []Task{
		{
			Id:        1,
			TaskName:  "backend",
			Content:   "Create user API",
			Status:    "inProgress",
			UserName:  "nutmeg man",
			CreatedAt: time.Now(),
			UpdatedAt: time.Now(),
		},
		{
			Id:        2,
			TaskName:  "backend",
			Content:   "Create task API",
			Status:    "inProgress",
			UserName:  "nutmeg man2",
			CreatedAt: time.Now(),
			UpdatedAt: time.Now(),
		},
	}

	DB.Create(&tasks)
}

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
	// テーブル作成
	DB.AutoMigrate(Task{})
	return DB
}

func main() {
	// TODO: DB接続
	DB = sqlConnect()

	// Seedデータ作成
	creatSeed()

	// TODO: Echoインスタンスを作成する
	e := echo.New()

	// cors設定
	arrowOrigins := []string{"*"}
	e.Use(middleware.Logger())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: arrowOrigins,
		AllowMethods: []string{http.MethodGet, http.MethodPost, http.MethodPut, http.MethodDelete},
	}))

	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})
	e.GET("/tasks", getTasks)
	e.GET("/tasks/:id", getTask)
	e.POST("/tasks", createTask)
	e.PUT("/tasks/:id", updateTask)
	e.DELETE("/tasks/:id", deleteTask)
	e.Logger.Fatal(e.Start(":1323"))
}
