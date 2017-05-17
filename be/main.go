package main

import (
	"gopkg.in/gin-gonic/gin.v1"
	"log"
	"./db"
	"./pages"
	"./comments"
	"strconv"
)

func main() {
	log.Println("Comment server starting...")
	db.Init("localhost:27017")
	r := gin.Default()
	r.GET("/comment", func(c *gin.Context) {
		url := c.Query("url")
		url_hash := pages.Get(url)
		c.Header("Access-Control-Allow-Origin", "*")
		c.JSON(200, comments.Get(url_hash))
	})
	r.POST("/comment", func(c *gin.Context) {
		url := c.Query("url")
		url_hash := pages.Get(url)
		author := c.PostForm("author")
		text := c.PostForm("text")
		x_str := c.PostForm("x")
		y_str := c.PostForm("y")
		x, _ := strconv.Atoi(x_str)
		y, _ := strconv.Atoi(y_str)
		c.Header("Access-Control-Allow-Origin", "*")
		c.JSON(200, gin.H{
			"result": comments.Post(
				url_hash, author, text,
				x, y,
			),
		})
	})
	r.Run()
}
