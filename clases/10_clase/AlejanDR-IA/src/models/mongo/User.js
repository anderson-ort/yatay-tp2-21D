import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: { type: String, require: true, maxlength: 100 },
		email: { type: String, require: true, maxlength: 100, unique: true },
	},
	{ collection: "users" },
);

export const UserModel = mongoose.model("User", userSchema);
