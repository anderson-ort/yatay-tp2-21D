import { UserModel } from "../../models/mongo/User.js";

export class MongoUserRepository {
	async getAll() {
		return await UserModel.find()
			.exec();
	}

	async getById(id) {
		return await UserModel.findById(id)
			// .populate("books", "title author rentedAt")
			.exec();
	}

	async createOne(user) {
		const createdUser = new UserModel(user);
		return await createdUser.save();
	}

	async updateOne(id, updateUserData) {
		return await UserModel.findByIdAndUpdate(id, updateUserData, {
			new: true,
		}).exec();
	}
	async deleteOne(id) {
		const is_deleted = UserModel.findByIdAndDelete(id).exec();
		return is_deleted != null;
	}
}

