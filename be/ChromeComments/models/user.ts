import mongoose = require('mongoose');

export interface IUser extends mongoose.Document
{
    username: string,
    password: string,
    salt: string
    email: string,
    token: string
}

export const UserSchema = new mongoose.Schema({
    username: { type: String, requried: true },
    password: { type: String, required: true },
    salt: { type: String, required: true },
    email: { type: String, required: true },
    token: { type: String, index: true, required: true }
});

const User = mongoose.model<IUser>('Users', UserSchema);
export default User;