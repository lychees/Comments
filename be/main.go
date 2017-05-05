package main

import (
	"gopkg.in/gin-gonic/gin.v1"
	"log"
)

func main() {
	log.Println("Comment server starting...")
	r := gin.Default()
	r.POST("/comment/:url", func(c *gin.Context) {
		url := c.Param("url")

	})
	r.Run()
}
