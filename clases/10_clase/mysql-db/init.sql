-- Crear tabla de usuarios
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);

-- Crear tabla de libros
CREATE TABLE IF NOT EXISTS books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  author VARCHAR(100),
  rented_by INT,
  rented_at DATETIME,
  FOREIGN KEY (rented_by) REFERENCES users(id)
);

-- Insertar usuarios de ejemplo
INSERT INTO users (name, email) VALUES
  ('Juan Perez', 'juan.perez@example.com'),
  ('Ana Gomez', 'ana.gomez@example.com');

-- Insertar libros de ejemplo (alquilados a usuarios)
INSERT INTO books (title, author, rented_by, rented_at) VALUES
  ('El Quijote', 'Miguel de Cervantes', 1, NOW()),
  ('Cien años de soledad', 'Gabriel García Márquez', 2, NOW()),
  ('La sombra del viento', 'Carlos Ruiz Zafón', NULL, NULL);
