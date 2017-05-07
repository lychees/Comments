"use strict";
var mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    username: { type: String, requried: true },
    password: { type: String, required: true },
    salt: { type: String, required: true },
    email: { type: String, required: true }
});
var User = mongoose.model('Users', exports.UserSchema);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = User;
//# sourceMappingURL=user.js.map