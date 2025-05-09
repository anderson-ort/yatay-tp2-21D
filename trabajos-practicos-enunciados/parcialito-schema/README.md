# 📚 Microparcial — Desarrollo de Software en Node.js

## 🎯 Objetivo

Desarrollar una pequeña **API REST con Node.js** aplicando buenas prácticas, estructura de carpetas limpia y uso de herramientas modernas de desarrollo. Se evaluará el consumo y manipulación de datos desde diferentes fuentes, así como el diseño modular del código.

---

## 📦 Estructura esperada del proyecto

Tu proyecto debe tener la siguiente estructura de carpetas y archivos:

```bash
📁 root-project-parcialito/
├── 📁 src/
│   ├── 📁 db/                 # Archivos .json de almacenamiento
│   ├── 📁 config/             # Configuraciones de entorno
│   ├── 📁 routes/             # Definiciones de rutas (Express)
│   ├── 📁 controllers/        # Lógica de manejo de rutas
│   ├── 📁 services/           # Lógica de negocio
│   ├── 📁 models/             # Clases y modelos de entidades
│   ├── 📁 repositories/       # Acceso y persistencia de datos
│   ├── 📁 middlewares/        # Autenticación, manejo de errores, etc.
│   ├── 📁 utils/              # Validaciones, helpers, formateadores
├── 📄 package.json            # Dependencias y configuración de scripts
├── 📄 .env                    # Variables de entorno (ej: puerto, claves)
└── 📄 app.js                  # Punto de entrada de la aplicación
```

---

## 📘 Entidad sugerida: `Book`

Usa esta estructura de objeto como base de tu CRUD:

```json
[
  {
    "id": "b72f94f2-bc09-49e4-85a6-83fd7eaa29c0",
    "title": "Cien años de soledad",
    "author": "Gabriel García Márquez",
    "isbn": "978-3-16-148410-0",
    "publishedDate": "1967-06-05",
    "availableCopies": 4
  }
]
```

---

## ✅ Requerimientos obligatorios

Tu aplicación debe contar con al menos **dos endpoints obligatorios** y un tercero opcional:

### 1. Endpoint que lee desde un archivo `.json`

* Ruta: `GET /api/json_file`
* Acción: Lee y devuelve los datos de un archivo `.json` ubicado en `src/db/`.

Ejemplo:
`GET /api/json_file` → retorna la lista completa de libros desde `books.json`.

---

### 2. Endpoint que consume una API externa y guarda un archivo `.csv`

* Ruta: `GET /api/data_externa`
* Acción: Descarga datos desde una URL pública y los guarda como CSV en la carpeta `src/db/`.

Servicio sugerido:

```js
const csv_url = "https://raw.githubusercontent.com/plotly/datasets/refs/heads/master/beers.csv";
```

---

### 3. Endpoint opcional: CRUD completo de libros (`Book`)

Si lo implementás, debés permitir las siguientes rutas:

* `POST    /api/book`      → Crear un libro
* `GET     /api/book/:id`  → Obtener un libro por ID
* `PUT     /api/book/:id`  → Actualizar un libro
* `DELETE  /api/book/:id`  → Eliminar un libro

---

## 🌐 Requisitos técnicos

* El servidor debe correr en el puerto **3003**
* Usar **ESModules** (`type: "module"`)
* Utilizar la estructura modular sugerida (controllers, services, etc.)

---

## 🧩 Dependencias obligatorias

### `dependencies`:

* `express`
* `dotenv`

### `devDependencies`:

* `morgan` → logging HTTP
* `eslint` o `biome` → control de estilo y calidad del código

---

## 📊 Rúbrica de Evaluación

| Criterio                  | Descripción                                                                                    | Puntos |
| ------------------------- | ---------------------------------------------------------------------------------------------- | ------ |
| **Respuesta Correcta**    | Los endpoints funcionan como se espera, devuelven el formato correcto y buen manejo de errores | 50%    |
| **Arquitectura Limpia**   | Separación correcta en carpetas, lógica de negocio fuera de controllers                        | 20%    |
| **Control de Versiones**  | Proyecto subido a GitHub, uso adecuado de commits y README                                     | 10%    |
| **Formateador de Código** | Uso de ESLint, Biome o Prettier para mantener código limpio y uniforme                         | 10%    |
| **Pruebas**               | Documentación con RestClient (archivos `.http`) o Postman (opcional)                           | 10%    |


---

## ⏱ Duración estimada

⏳ **Tiempo total: 3h**

