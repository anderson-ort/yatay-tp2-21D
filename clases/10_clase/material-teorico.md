ORMS 
- sequilize -> para usarlo en una base de datos como pg /mysql etc
- mongoose -> para usarlo con bases de datos no relacionales como mongodb


DESIGN PATTERNS APPLY TO THE PROJECT 
- MVC
- DTO/DAO
- SINGLETON
- FACTORY

---

## 🧱 Estructura general del patrón MVC en backend API REST

```bash
📁 src/
├── config/           → configuración general (db, env)
├── controllers/      → lógica de control (maneja requests/responses)
├── daos/             → acceso a la base de datos
├── dtos/             → transformación de datos para salida (opcional)
├── models/           → definición de modelos de datos
├── routes/           → define rutas y las conecta a los controladores
├── services/         → lógica de negocio
├── app.js            → inicialización de Express
└── server.js         → punto de arranque
```

---

## 🧠 Roles de cada parte en MVC:

| Capa            | Responsabilidad                                                | Ejemplo              |
| --------------- | -------------------------------------------------------------- | -------------------- |
| **Modelo**      | Define la estructura de los datos y relaciones                 | `User.js`, `Post.js` |
| **Vista**       | Respuesta JSON generada por el controlador (no HTML)           | `res.json(data)`     |
| **Controlador** | Recibe la request, invoca al servicio y devuelve una respuesta | `userController.js`  |
| **Servicio**    | Contiene la lógica de negocio                                  | `userService.js`     |
| **DAO**         | Abstracción de acceso a base de datos                          | `userDAO.js`         |
| **DTO**         | Estructura de salida (opcional)                                | `userDTO.js`         |

---


* **Modelos:** Definición de estructuras y relaciones.
* **DAOs (Singleton):** Acceso a la base de datos.
* **Servicios:** Lógica de negocio desacoplada.
* **Controladores:** Manejan las requests HTTP.
* **Rutas:** Conectan rutas HTTP con controladores.
* **DTOs (opcional):** Garantizan salidas consistentes.
* **Conexión (Singleton):** Evita múltiples instancias de conexión DB.


--- 


## 🔷 1. ¿Qué es Sequelize?

**Sequelize** es un **ORM (Object Relational Mapper)** para Node.js que permite interactuar con bases de datos SQL (MySQL, PostgreSQL, SQLite, etc.) usando objetos en lugar de SQL plano.

Permite:

* Definir modelos (tablas) con clases o funciones.
* Relacionarlos (asociaciones).
* Usar métodos JS para hacer consultas (findAll, create, update, destroy).
* Evitar SQL manual, aunque también permite usarlo si lo necesitás.

```sh
npm install sequelize mysql2
```
---

## 🧠 2. ¿Qué es Mongoose?

**Mongoose** es una **librería de modelado de datos para MongoDB** en Node.js.

> Permite definir **esquemas** para tus documentos, manejar relaciones, validaciones, hooks, y más, todo dentro de JavaScript.

MongoDB por sí sola es **flexible** (no requiere esquemas fijos), pero esa flexibilidad puede complicar el desarrollo. Mongoose resuelve eso.
```bash
npm install mongodb
npm install mongooose
```


---

## 🎯 ¿Por qué usar Mongoose?

| Sin Mongoose (MongoDB puro) | Con Mongoose                     |
| --------------------------- | -------------------------------- |
| No hay esquema definido     | Puedes definir un `Schema`       |
| Validación manual           | Validación automática en modelos |
| Relaciones manuales         | `.populate()` simplifica joins   |
| Código más desordenado      | Más estructura y orden           |

---
## 📌 Ventajas clave de Mongoose

- ✅ Define estructura y reglas para tus datos
- ✅ Valida automáticamente tus documentos
- ✅ Facilita relaciones (`populate`)
- ✅ Permite hooks y middlewares (`pre`, `post`)
- ✅ Muy bien integrado con Express y proyectos MVC



# Design Patterns aplicado al proyecto a encarar

## 1. **DTO / DAO**

### ¿Qué son?

* **DAO (Data Access Object):** capa que abstrae la lógica para acceder a la base de datos (consultas, inserciones, updates, deletes).
* **DTO (Data Transfer Object):** objeto que define cómo se deben enviar o recibir los datos, sirve para filtrar o transformar la información.

### ¿Dónde se usan?

* **DAO:**

  * En la capa que maneja la persistencia (acceso a BD).
  * Sirve para centralizar todas las operaciones CRUD, evitar duplicar consultas, y separar la lógica de acceso a datos del resto del código (por ejemplo, del controlador o servicio).
  * Facilita cambiar de base de datos sin cambiar el resto del sistema.

* **DTO:**

  * En la capa de comunicación entre backend y frontend o entre capas internas.
  * Se usa para evitar exponer directamente la estructura interna de los modelos o entidades (por ejemplo, evitar mandar campos sensibles como contraseñas).
  * Permite modificar el formato o añadir campos calculados sin cambiar la base de datos ni los modelos.

---

## 2. **SINGLETON**

### ¿Qué es?

Un patrón que asegura que una clase tenga una única instancia durante toda la vida de la aplicación.

### ¿Dónde se usa?

* **Conexión a la base de datos:**

  * Solo necesitas una conexión abierta y compartida, no múltiples conexiones por cada request o componente.
  * Mejora el rendimiento y evita fugas de recursos.

* **Configuración global:**

  * Cuando tenés un objeto o servicio que debe existir una única vez (por ejemplo, un logger, o un cliente API).

---

## 3. **FACTORY**

### ¿Qué es?

Patrón para crear objetos, delegando la creación a una clase/fábrica. Así no tienes `new` en muchas partes del código y puedes cambiar qué clase se instancia sin cambiar el cliente.

### ¿Dónde se usa?

* **Creación de DAOs o servicios diferentes según contexto:**

  * Por ejemplo, dependiendo de la base de datos elegida (MySQL, MongoDB), la fábrica devuelve el DAO adecuado.
  * Permite cambiar la implementación sin modificar el código que consume el DAO.

* **Creación de objetos complejos:**

  * Cuando la creación de un objeto implica lógica o parámetros variables, el factory encapsula esta lógica y mantiene limpio el resto del código.

---

## 📝 **Resumen práctico**

| Patrón    | Uso típico                                            | Ejemplo concreto en backend                                           |
| --------- | ----------------------------------------------------- | --------------------------------------------------------------------- |
| DTO/DAO   | Separar acceso a datos y estructurar datos que viajan | `UserDAO` con métodos CRUD; `UserDTO` para enviar solo email y nombre |
| SINGLETON | Compartir instancia única                             | Conexión a MongoDB o Sequelize                                        |
| FACTORY   | Crear objetos según contexto o configuración          | Factory que devuelve DAO para MongoDB o MySQL según config            |

Claro, aquí te dejo la documentación actualizada incorporando que el proyecto usará **MySQL** y **MongoDB** como bases de datos, explicando brevemente el motivo y cómo se integran.

---

# 🚀 Proyecto Backend: Alquiler de Libros

## 1. Stack Tecnológico Propuesto

* **Node.js** + **Express** (API REST)
* **Bases de datos:**

  * **MySQL** (relacional, para datos estructurados y transaccionales, como usuarios y alquileres)
  * **MongoDB** (NoSQL, para datos flexibles, logs, o información adicional que requiera esquema dinámico)
* **Sequelize** ORM para MySQL
* **Mongoose** ODM para MongoDB
* **Docker + Docker Compose** para contenerizar la base de datos MySQL (y opcionalmente MongoDB)
* Posible despliegue en **Railway**, **Render** u otra plataforma que soporte ambas BD

---

## 2. Motivación para usar MySQL y MongoDB juntos

* **MySQL**:
  Ideal para manejar las entidades principales con relaciones claras (Usuarios, Libros, alquileres). Garantiza integridad y transacciones.

* **MongoDB**:
  Útil para almacenar datos con esquema flexible, por ejemplo:

  * Logs de actividad
  * Historial de cambios
  * Metadata que puede crecer o variar con el tiempo sin alterar el esquema principal

---

## 3. Arquitectura y conexión

* Usaremos **Sequelize** para conectarnos a MySQL y manejar las entidades principales con modelos y relaciones.
* Usaremos **Mongoose** para conectarnos a MongoDB y manejar colecciones no estructuradas o con esquemas flexibles.
* La lógica del backend podrá combinar consultas a ambas bases según la necesidad.

---

## 4. Configuración de bases de datos

### MySQL

* Docker Compose para levantar MySQL 
* Creación de base, usuario y tablas mediante script `init.sql`
* Sequelize para modelar y manipular datos

### MongoDB (opcional)

* Puede levantarse localmente o en un servicio en la nube (MongoDB Atlas)
* Mongoose para definir esquemas y consultas

---

## 5. Estructura básica del proyecto (_posible_)

```bash
book-rental/
├── docker-compose.yml
├── init.sql
├── src/
│   ├── models/
│   │    ├── mysql/
│   │    │    ├── user.js
│   │    │    └── book.js
│   │    ├── mongo/
│   │    │    └── log.js
│   ├── routes/
│   │    ├── users.js
│   │    └── books.js
│   ├── controllers/
│   │    ├── userController.js
│   │    └── bookController.js
│   ├── db/
│   │    ├── mysql.js
│   │    └── mongo.js
│   ├── app.js
│   └── server.js
├── package.json
└── README.md
```

## Tests
```bash
npm install --save-dev jest @babel/preset-env babel-jest supertest dotenv
```