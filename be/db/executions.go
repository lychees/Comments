package db

import "gopkg.in/mgo.v2"

var (
	db *mgo.Database
	users *mgo.Collection
	pages *mgo.Collection
	comments *mgo.Collection
)

func Init(servers string)  {
	session, err := mgo.Dial(servers)
	if err != nil {
		panic(err)
	}
	db = session.DB("comments")
	users = db.C("users")
	pages = db.C("pages")
	comments = db.C("comments")
}


