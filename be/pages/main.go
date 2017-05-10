package pages

import (
	"crypto/sha256"
	"encoding/hex"
	"io"
	"../db"
)

func hash_string(str string) string {
	hasher := sha256.New()
	io.WriteString(hasher, str)
	return hex.EncodeToString(hasher.Sum(nil))
}

func Get(url string) string {
	hash := hash_string(url)
	db.PagesC.UpsertId(hash, db.Page{
		Id: hash,
		Url: url,
	})
	return hash
}
