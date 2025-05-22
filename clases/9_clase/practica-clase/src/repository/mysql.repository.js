import { mysqlConnection } from "../databases/mysql.cnx.js"


export const MysqlRepository = {

    getAll: (callback) => {
        mysqlConnection.query('SELECT * FROM books', (error, rows) => {
            if (error) {
                console.error("Error al obtener libros:", error);
                return callback(error, null);
            }
            return callback(null, rows);
        });
    },

    insert: (book, callback) => {
        const query = 'INSERT INTO books (title, author, published_year, genre) VALUES (?, ?, ?, ?)';
        const values = [book.title, book.author, book.published_year, book.genre];

        mysqlConnection.query(query, values, (error, result) => {
            if (error) {
                console.error("Error al insertar libro:", error);
                return callback(error, null);
            }
            callback(null, { id: result.insertId, ...book });
        });
    }
}