import { User } from "../../models/mysql/User.js";

export class MysqlUserRepository {
	async getAll() {
		return await User.findAll();
	}

	async getById(id) {
		return await User.findByPk(id);
	}

	async createOne(_user) {
		return await User.create(_user);
	}

	async updateOne(id, updateUserData) {
		const user = await User.findByPk(id);
		if (!user) return null;
		return await user.update(updateData);
	}
	async deleteOne(id) {
		const user = await User.findByPk(id);
		if (!user) return null;
		await user.destroy();
		return true;
	}
}
