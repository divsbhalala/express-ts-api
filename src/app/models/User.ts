/**
 * Define User model
 *
 */


import { IUser } from '../interfaces/models/user';
import mongoose from '../core/Database';

// Create the model schema & register your custom methods here
export interface IUserModel extends IUser, mongoose.Document {
}

// Define the User Schema
export const UserSchema = new mongoose.Schema({
	fbId: { type: String },
	name: { type: String },
}, {
	timestamps: true
});

const User = mongoose.model<IUserModel>('User', UserSchema);

export default User;
