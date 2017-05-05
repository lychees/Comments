package db

import (
	"gopkg.in/mgo.v2/bson"
	"time"
)

type Page struct {
	Url string
}

type Comment struct {
	Author bson.ObjectId
	Text string
	X int
	Y int
	Date time.Time
}

type User struct {
	Name string
	Password string
}

