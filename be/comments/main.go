package comments

import (
	"../db"
	"time"
	"gopkg.in/mgo.v2/bson"
)

func Post(
	url_hash string,
	author string,
	text string,
	x int, y int,
) error {
	return db.CommentsC.Insert(db.Comment{
		Page:   url_hash,
		Author: author,
		Text:   text,
		X:      x,
		Y:      y,
		Date:   time.Now(),
	})
}

func Get(url_hash string) []db.Comment {
	var results []db.Comment = []db.Comment{}
	db.CommentsC.Find(bson.M{
		"Page": url_hash,
	}).All(&results)
	return results
}
