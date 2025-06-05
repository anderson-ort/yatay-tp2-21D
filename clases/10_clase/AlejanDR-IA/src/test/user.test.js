// import mongoose from "mongoose";
import request from "supertest";
import app from "../app.js";
import mongoConnectionInstance from "../databases/mongoos.database.js";
import { sequelize } from "../databases/mysql.database.js";

import dotenv, { config } from "dotenv";
import mongoose from "mongoose";

dotenv.config();

beforeAll(async () => {
	if (process.env.DATABASE === "mysql") {
		await sequelize.sync();
	} else {
		await mongoConnectionInstance.connect();
	}
});

afterAll(async () => {
	if (process.env.DATABASE === "mysql") {
		await sequelize.close();
	} else {
		await mongoose.disconnect();
	}
});

describe("Pruebas unitarias a mi api de Users", () => {
	let createdUser;

	test("POST  /api/user/ -> crear un usuario", async () => {
		const response = await request(app).post("/api/user/").send({
			name: "otro",
			email: "otro@test.com",
		});

		const __id = process.env.DATABASE === "mysql" ? "id" : "_id"
		expect(response.statusCode).toBe(200);
		expect(response.body).toHaveProperty(__id);
		expect(response.body.name).toBe("otro");
		expect(response.body.email).toBe("otro@test.com");

		createdUser = response.body;
	});

	test("GET /api/user/:id -> obtoener el usuario creado", async () => {
		const usuarioId = process.env.DATABASE === "mysql" ? `${createdUser.id}` : `${createdUser._id}`
		const response = await request(app).get(`/api/user/${usuarioId}`);
		
		expect(response.statusCode).toBe(200);
		expect(response.body.name).toBe("otro");
	});
	
	test("DELETE /api/user/:id → delete a user", async () => {
		const usuarioId = process.env.DATABASE === "mysql" ? `${createdUser.id}` : `${createdUser._id}`
		const response = await request(app).delete(`/api/user/${usuarioId}`);
		expect(response.statusCode).toBe(200);
	});
});
