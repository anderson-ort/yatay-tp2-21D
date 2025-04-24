import { Usuario } from "../model/Usuario.js";
import { JsonRepository } from "../repository/JsonRepository.js";
import { randomUUID } from "crypto";

const usuarioJsonRepository = new JsonRepository(Usuario);

export const UsuarioJsonService = {
	async createOne(usuario) {
		const newUsuario = {
			...usuario,
			id: randomUUID(),
		};

		const reponseData = await usuarioJsonRepository.createOne(newUsuario);

		return reponseData;
	},

	async getAll() {
		const { usuario } = await usuarioJsonRepository.getAll();
		return usuario;
	},
};
