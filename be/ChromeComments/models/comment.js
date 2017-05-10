"use strict";
var mongoose = require("mongoose");
var CommentType;
(function (CommentType) {
    CommentType[CommentType["PlainText"] = 0] = "PlainText";
    CommentType[CommentType["Picture"] = 1] = "Picture";
})(CommentType = exports.CommentType || (exports.CommentType = {}));
exports.CommentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', requried: true },
    url: { type: String, required: true, index: true },
    time: { type: Date, required: true },
    data: { type: String },
    type: { type: String, enum: ["PlainText", "Picture"] }
});
var Comment = mongoose.model('Comment', exports.CommentSchema);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Comment;
//# sourceMappingURL=comment.js.map