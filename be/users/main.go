package users

import (
	"../db"
	"crypto/sha512"
	"io"
	"encoding/hex"
	"gopkg.in/mgo.v2/bson"
)

const (
	WEAK_PASSWORD = string("WEAK_PASSWORD")
	ALREADY_EXISTS = string("ALREADY_EXISTS")
	ERROR = string("ERROR")
	OK = string("OK")
	WRONG_PASSWORD = string("WRONG_PASSWORD")
)

func hash_string(str string) string {
	hasher := sha512.New()
	io.WriteString(hasher, str)
	return hex.EncodeToString(hasher.Sum(nil))
}

func Register(name string, password string) (bool, string) {
	password = hash_string(password)
	if count, err := db.UsersC.Find(bson.M{"Name": name}).Count(); count > 0 {
		return false, ALREADY_EXISTS
	} else if err != nil {
		return false, ERROR
	}
	if err := db.UsersC.Insert(db.User{Name: name, Password: password}); err == nil {
		return true, OK
	} else {
		return false, ERROR
	}
}

func Login(name string, password string) (bool, string) {
	if count, err := db.UsersC.Find(bson.M{"Name": name, "Password": hash_string(password)}).Count(); count > 0 {
		return true, OK
	} else if err != nil {
		return false, ERROR
	} else {
		return false, WRONG_PASSWORD
	}
}