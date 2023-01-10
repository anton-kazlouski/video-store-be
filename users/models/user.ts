import mongoose from "mongoose"
const Schema = mongoose.Schema

interface IUser extends mongoose.Document {
  email: string; 
  password: string; 
};

const userSchema = new Schema(
{
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true,
	}
}
)

const User = mongoose.model<IUser>('User', userSchema)
export default User
