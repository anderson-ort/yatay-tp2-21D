import mysql from "mysql"
import { config } from "../config/config.js"

export const mysqlConnection = mysql.createConnection(
    {
        host: "127.0.0.1",
        user: "root",
        password: config.MYSQL_PASS,
        database: "ort_database"
    }
)