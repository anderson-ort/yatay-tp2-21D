import { DataTypes } from "sequelize";
import { sequelize } from "../../databases/mysql.database.js";

export const User = sequelize.define(
	"User",
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		name: { type: DataTypes.STRING(100), allowNull: false },
		email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
	},
	{
		tableName: "users",
		timestamps: false,
	},
);
