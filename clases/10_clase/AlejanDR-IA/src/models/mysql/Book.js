import { DataTypes } from "sequelize";
import { sequelize } from "../../databases/mysql.database.js";
import { User } from "./User.js";

const Book = sequelize.define(
	"Book",
	{
		id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true },
		title: { type: DataTypes.STRING(200), allowNull: false },
		author: { type: DataTypes.STRING(100), defaultValue: "Borges" },
		rentedAt: { type: DataTypes.DATE, field: "rented_at" },
	},
	{
		tableName: "books",
		timestamps: false,
	},
);

User.hasMany(Book, { foreignKey: "rented_by", as: "books" });
Book.belongsTo(User, { foreignKey: "rented_by", as: "renter" });

export default Book;
