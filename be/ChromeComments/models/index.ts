import mongoose = require('mongoose');
import mongodb = require('mongodb');
import fs = require('fs');
import grid = require('gridfs-stream');
import * as user from './user';
import * as comment from './comment';

var Schema = mongodb.mongoose.Schema;
var conn = mongodb.mongoose.connection;
grid.mongo = mongodb.mongoose.mongo;

export class db
{
    public users: mongoose.model<user.IUser> = user;
    public comments: mongoose.model<comment.IComment> = comment;
    public gfs: any = grid(conn.db);
    public fs: any = fs;
    public mongoose: mongodb.mongoose;
}

export default db;