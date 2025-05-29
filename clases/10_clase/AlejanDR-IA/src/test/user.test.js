import mongoose from "mongoose";
import request from "supertest";
import app from "../app.js";
import mongoConnectionInstance from "../databases/mongoos.database.js";

import dotenv from "dotenv";

dotenv.config();

beforeAll(async () => {
    await mongoConnectionInstance.connect();

});


afterAll(async () => { await mongoose.disconnect() });

describe("Pruebas unitarias a mi api de Users", () => {
    let createdUser;

    test("POST  /api/user/ -> crear un usuario", async () => {
        const response = await request(app).post("/api/user/").send({
            name: "test",
            email: "perez@test.com",
        });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("_id");
        expect(response.body.name).toBe("test");
        expect(response.body.email).toBe("perez@test.com");

        createdUser = response.body;
    });

    test("GET /api/user/:id -> obtoener el usuario creado", async () => {
        const response = await request(app).get(`/api/user/${createdUser._id}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe("test");
    });

    test('DELETE /api/user/:id → delete a user', async () => {
        const response = await request(app).delete(`/api/user/${createdUser._id}`);
        expect(response.statusCode).toBe(200);
    });

});
