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

# 📃 Rúbrica de Evaluación para Proyectos API

## Criterios de Evaluación

| Criterio | Descripción | Porcentaje |
|----------|-------------|------------|
| **Respuesta Correcta** | Los endpoints deben cumplir con los formatos de respuesta esperados | 50% |
| **Arquitectura Limpia** | Separación adecuada de capas (controller, service, etc.). La lógica de negocio no debe estar en la capa de presentación (controller) | 20% |
| **Control de Versiones** | Proyecto subido correctamente a GitHub | 10% |
| **Formateador de Código** | Uso de herramientas de formateo como Prettier (ESLint) o Biome | 10% |
| **Pruebas** | Implementación de pruebas para los endpoints, ya sea mediante Postman (no recomendado) o archivos HTTP con RestClient | 10% |

## Detalles de Evaluación

### Respuesta Correcta (50%)
- Los endpoints devuelven los datos esperados en el formato correcto
- Los códigos de estado HTTP son apropiados
- Se manejan adecuadamente los errores

### Arquitectura Limpia (20%)
- Correcta separación de responsabilidades
- La lógica de negocio está en services, no en controllers
- Estructura de carpetas organizada según patrón MVC u otro patrón arquitectónico apropiado

### Control de Versiones (10%)
- Repositorio en GitHub organizado
- Commits con mensajes descriptivos
- README con instrucciones claras

### Formateador de Código (10%)
- Configuración correcta de Prettier, ESLint o Biome
- Código formateado consistentemente
- Reglas de formato implementadas en el proyecto

### Pruebas (10%)
- Documentación de endpoints con ejemplos de solicitud/respuesta
- Archivos HTTP con RestClient para probar los endpoints
- Alternativamente, colección de Postman (aunque no es lo recomendado)
---

### ⏱ Tiempo estimado

- **Duración**: 2 horas y 30 minutos.
