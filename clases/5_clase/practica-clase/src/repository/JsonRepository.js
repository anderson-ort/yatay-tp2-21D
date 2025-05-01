import { JsonHandler } from "../utils/JsonHandler.js";

export class JsonRepository {
	constructor(model) {
		this.model = model;
	}



	async createOne(...params) {
		const newUsuario = new this.model(..,params);

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
