import { UsuarioJsonService } from "../service/UsuarioJsonService.js";

export const UsuarioController = {
	async createOne(request, response) {
		const { usuario } = request.body;

		if (!usuario) response.json({ status: 404, message: "tirame algo" });

		const responseData = await UsuarioJsonService.createOne(usuario);

		const responseInfo = `El usuario: ${responseData.nombre} ha sido creado`

		response.json({
			status: 200,
			payload: responseInfo,
		});
	},

	async getAll(request, response) {
		const usuarios = await UsuarioJsonService.getAll();

		if (!usuarios) {
			response.json({
				status: 404,
				message: "No Data",
			});
			return;
		}

		response.json({
			status: 200,
			payload: usuarios,
		});
	},
};
