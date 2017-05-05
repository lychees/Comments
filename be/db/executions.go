package db

import "gopkg.in/mgo.v2"

var (
	Db        *mgo.Database
	UsersC    *mgo.Collection
	PagesC    *mgo.Collection
	CommentsC *mgo.Collection
)

func Init(servers string)  {
	session, err := mgo.Dial(servers)
	if err != nil {
		panic(err)
	}
	Db = session.DB("CommentsC")
	UsersC = Db.C("UsersC")
	PagesC = Db.C("PagesC")
	CommentsC = Db.C("CommentsC")
}


