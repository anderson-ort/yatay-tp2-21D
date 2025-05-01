## 🧪 Microparcial - Desarrollo de Software NodeJs

### Objetivo
Desarrollar una pequeña API en Node.js que implemente distintos tipos de consumo y manejo de datos. Se evaluará la correcta organización del proyecto, el uso de buenas prácticas y la implementación de dependencias según el contexto del desarrollo.

---

### ✅ Requerimientos obligatorios

Tu aplicación debe cumplir con los siguientes requisitos:

1. **Tres endpoints funcionales**:
   - **Endpoint 1**: Devuelve datos provenientes de un archivo `.json` local.  
     Ejemplo: `/api/productos` devuelve el listado leído desde `productos.json`.
   - **Endpoint 2**: Consume datos desde una API externa y los almacena en un archivo `.csv`.  
     Ejemplo: `/api/usuarios-externos` consulta una API pública y guarda los resultados en `usuarios.csv`.
   - **Endpoint 3 [opcional]**: Implementa un CRUD completo sobre una entidad (por ejemplo, usuarios o tareas).
     - `POST /api/entidad` → Crear
     - `GET /api/entidad/:id` → Obtener por ID
     - `PUT /api/entidad/:id` → Actualizar
     - `DELETE /api/entidad/:id` → Eliminar

---

### 📂 Estructura del proyecto

Se evaluará especialmente:

- Organización de carpetas y módulos.
- Separación de responsabilidades (rutas, controladores, servicios, etc.).
- Legibilidad del código y buenas prácticas.

---

### 🔧 Dependencias requeridas

#### Dependencias de desarrollo (devDependencies):
- `nodemon`: para reinicio automático en desarrollo.
- `dotenv`: para gestión de variables de entorno.
- `morgan`: para logging de peticiones HTTP.
- `eslint` o `biome`: para el control de estilo y calidad del código.

#### Dependencias de producción (dependencies):
- `express`: framework principal.
- `jsonwebtoken` (`jwt`): para autenticación basada en tokens (si se aplica).
- `basic-auth`: para autenticación básica (si se aplica).

---

### 💾 [Opcional] Conexión a Base de Datos

- Puedes conectar tu CRUD a una base de datos (MongoDB, PostgreSQL, SQLite, etc.) si lo deseas.  
  Este aspecto sumará puntos extra en la evaluación.

---

### ⏱ Tiempo estimado

- **Duración**: 2 horas y 30 minutos.
