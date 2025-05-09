import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

const { SECRET_KEY, JWT_CONFIG } = config;

export const userToken = (data) => {
	return jwt.sign(data, SECRET_KEY, JWT_CONFIG);
};
