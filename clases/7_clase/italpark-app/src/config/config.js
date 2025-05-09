export const config = {
	PORT: 3001,
	HOST: "127.0.0.1",
	DB_PATH: "./src/db/ticket.db.json",
	SECRET_KEY: "ort-@",
	JWT_CONFIG: {
		expiresIn: 1 * 60,
	},
};
