package db

import (
	"time"
)

type Page struct {
	Id string `json:"id" bson:"_id,omitempty"`
	Url string
}

type Comment struct {
	Page string
	Author string
	Text string
	X int
	Y int
	Date time.Time
}

type User struct {
	Name string
	Password string
}

