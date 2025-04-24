import { JsonHandler } from "../utils/JsonHandler.js";

export class JsonRepository {
	constructor(model) {
		this.model = model;
	}

	async createOne({ id, nombre, email }) {
		const newUsuario = new this.model(id, nombre, email);

		try {
			const data = await this.getAll();
			const { usuario } = data;

			usuario.push(newUsuario);
			JsonHandler.write(
				{ ...data, usuario },
			);

			return newUsuario;
		} catch (error) {
			console.log({ error });
		}
	}

	async getAll() {
		return await JsonHandler.read();
	}
}
