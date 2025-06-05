import { userRepository } from "../repositories";


export const UserController = {
	getAllUsers: async (req, res) => {
		try {
			const users = await userRepository.getAll();
			res.status(200).json({ users });
		} catch (error) {
			console.error("Error en el controller del usuario", error.message);
			res.status(500).json({ error: "Error interno del server" });
		}
	},

	getUserById: async (req, res) => {
		try {
			const { id } = req.params;
			const user = await userRepository.getById(id);
			if (!user) {
				return res.status(404).json({ error: "Usuario no encontrado" });
			}
			res.status(200).json(user);
		} catch (error) {
			console.error("Error al obtener el usuario", error.message);
			res.status(500).json({ error: "Error interno del server" });
		}
	},

	createUser: async (req, res) => {
		try {
			const userData = req.body;
			const newUser = await userRepository.createOne(userData);
			res.status(200).json(newUser);
		} catch (error) {
			console.error("Error al crear el usuario", error.message);
			res.status(500).json({ error: "Error al crear el usuario" });
		}
	},

	updateUser: async (req, res) => {
		try {
			const { id } = req.params;
			const updatedData = req.body;
			const updatedUser = await userRepository.updateOne(id, updatedData);
			if (!updatedUser) {
				return res.status(404).json({ error: "Usuario no encontrado" });
			}
			res.status(200).json({ user: updatedUser });
		} catch (error) {
			console.error("Error al actualizar el usuario", error.message);
			res.status(500).json({ error: "Error al actualizar el usuario" });
		}
	},

	deleteUser: async (req, res) => {
		try {
			const { id } = req.params;
			const deletedUser = await userRepository.deleteOne(id);
			if (!deletedUser) {
				return res.status(404).json({ error: "Usuario no encontrado" });
			}
			res.status(200).json({ message: "Usuario eliminado correctamente" });
		} catch (error) {
			console.error("Error al eliminar el usuario", error.message);
			res.status(500).json({ error: "Error al eliminar el usuario" });
		}
	},
};
