import mongoose, { Schema } from "mongoose";

const bookSchema = new mongoose.Schema(
	{
		title: { type: String, require: true, maxlength: 200 },
		author: { type: String, require: false, maxlength: 100 },
		rentedBy: { type: Schema.Types.ObjectId, ref: "User" },
		rentedAt: { type: Date, default: Date.now },
	},
	{ collection: "books" },
);

export const BookModel = mongoose.model("Book", bookSchema);
