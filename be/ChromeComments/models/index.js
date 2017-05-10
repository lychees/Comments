"use strict";
var mongodb = require("mongodb");
var fs = require("fs");
var grid = require("gridfs-stream");
var user = require("./user");
var comment = require("./comment");
var Schema = mongodb.mongoose.Schema;
var conn = mongodb.mongoose.connection;
grid.mongo = mongodb.mongoose.mongo;
var db = (function () {
    function db() {
        this.users = user;
        this.comments = comment;
        this.gfs = grid(conn.db);
        this.fs = fs;
    }
    return db;
}());
exports.db = db;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = db;
//# sourceMappingURL=index.js.map