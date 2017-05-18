package db

import (
	"time"
)

type Page struct {
	Id string `json:"id" bson:"_id,omitempty"`
	Url string `json:"url"`
}

type Comment struct {
	Page string `json:"page"`
	Author string `json:"author"`
	Text string `json:"text"`
	X int `json:"x"`
	Y int `json:"y"`
	Date time.Time `json:"date"`
}

type User struct {
	Name string `json:"name"`
	Password string `json:"password"`
}

