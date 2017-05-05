package db

import (
	"gopkg.in/mgo.v2/bson"
	"time"
)

type Page struct {
	url string
}

type Comment struct {
	author bson.ObjectId
	text string
	x int
	y int
	date time.Time
}

type User struct {
	name string
	password string
}

