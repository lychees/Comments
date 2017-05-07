import mongoose = require('mongoose');

export enum CommentType
{
    PlainText,
    Picture
}

export interface IComment extends mongoose.Document {
    userId: string,
    url: string,
    time: Date,
    data: string,
    type: CommentType
}

export const CommentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', requried: true },
    url: { type: String, required: true, index: true },
    time: { type: Date, required: true },
    data: { type: String },
    type: { type: String, enum: ["PlainText", "Picture"] }
});

const Comment = mongoose.model<IComment>('Comment', CommentSchema);
export default Comment;