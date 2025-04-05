# **Clase: Introducción a Módulos, Web Servers y Middlewares en Node.js**

## **1. Módulos en JavaScript: `require` e `import`**
### **CommonJS (`require`)**
CommonJS es el sistema de módulos por defecto en Node.js. Utiliza `require` para importar y `module.exports` para exportar.

**Ejemplo de uso con CommonJS:**
```javascript
// archivo math.js
module.exports.sumar = (a, b) => a + b;
module.exports.restar = (a, b) => a - b;
```

```javascript
// archivo index.js
const math = require('./math');
console.log(math.sumar(2, 3)); // 5
```

### **ESModules (`import`)**
A partir de ES6, JavaScript introduce los ESModules, que usan `import` y `export`.

**Ejemplo de uso con ESModules:**
```javascript
// archivo math.mjs
export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;
```

```javascript
// archivo index.mjs
import { sumar } from './math.mjs';
console.log(sumar(2, 3)); // 5
```
Para usar ESModules en Node.js, en `package.json` hay que definir:
```json
{
  "type": "module"
}
```

## **2. `package.json` y `package-lock.json`**

- _[Un poco de que es basicamente el **package.json**](https://nicolas-seguro.medium.com/bases-y-claves-de-npm-package-package-lock-json-7af6c141d02d)_

- _[Un poco mas de coo funciona el **package-lock.json** y por que es importante el uso de la misma]()_

- _[Algo de la **documentacion oficial**](https://docs.npmjs.com/cli/v11/configuring-npm/package-lock-json)_

### **`package.json`**
Es un archivo que contiene información del proyecto, dependencias y scripts.
Se genera con:
```sh
npm init -y
```
Ejemplo de `package.json`:
```json
{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

### **`package-lock.json`**
Este archivo bloquea las versiones exactas de las dependencias para evitar inconsistencias en diferentes instalaciones.


Algunos comandos básicos
```bash
    npm init        # Crea un proyecto
    npm search      # Búsqueda de paquetes
    npm install     # Instala paquetes
    npm uninstall   # Desinstala paquetes
    npm list        # Listado del árbol de dependencias
    npm outdated    # Lista de paquetes para actualizar
    npm update      # Actualiza la versión del paquete.
    npm help        # Ayuda
```


## **3. ¿Qué es un Web Server?**
Un **servidor web** es una aplicación que escucha peticiones HTTP y responde con datos. Puede servir archivos estáticos o manejar lógica de negocio.

Ejemplo de un servidor web básico con Node.js:
```javascript
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hola, mundo!');
});
server.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
```

## **4. ¿Qué es Express?**
Express es un framework minimalista para Node.js que facilita la creación de servidores HTTP.

Instalación:
```sh
npm install express
```

## **5. Creando un Web Server con Express**
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola, mundo con Express!');
});

app.listen(3000, () => console.log('Servidor Express en http://localhost:3000'));
```

## **6. Middlewares en Express**
### **¿Qué es un Middleware?**
Un middleware es una función que se ejecuta antes de enviar una respuesta.

### **Middlewares básicos en Express**
#### **1. `express.json()`**
Habilita el manejo de JSON en las peticiones.
```javascript
app.use(express.json());
```
#### **2. `express.urlencoded({ extended: true })`**
Permite manejar datos enviados desde formularios.
```javascript
app.use(express.urlencoded({ extended: true }));
```
#### **3. `cors`**
Maneja permisos de acceso entre dominios diferentes.
```sh
npm install cors
```
```javascript
const cors = require('cors');
app.use(cors());
```

### **Tipos de Middlewares**
1. **Middlewares de aplicación**: Afectan a todas las rutas.
2. **Middlewares de enrutador**: Se aplican solo a ciertas rutas con `express.Router()`.
3. **Middlewares de manejo de errores**: Capturan y manejan errores en la aplicación.

Ejemplo de middleware personalizado:
```javascript
app.use((req, res, next) => {
    console.log(`Petición recibida: ${req.method} ${req.url}`);
    next();
});
```


## 🧩 1. **Middleware de Aplicación**
Se aplica a **todas** las rutas de la app.

### 💡 Uso común: Logging, CORS, autenticación global, parseo de body.

```javascript
const express = require('express');
const app = express();

// Middleware de aplicación: se ejecuta en TODAS las rutas
app.use((req, res, next) => {
  console.log(`[APP] ${req.method} ${req.url}`);
  next(); // Importante: continuar al siguiente middleware o ruta
});

app.get('/home', (req, res) => {
  res.send('Página principal');
});

app.get('/about', (req, res) => {
  res.send('Acerca de');
});
```

📝 **Resultado**: cada vez que se accede a cualquier ruta, se imprime el método y la URL en consola.

---

## 🧩 2. **Middleware de Enrutador**
Se aplica **solo a ciertas rutas** mediante `express.Router()`.

### 💡 Uso común: Agrupar middleware por recurso o módulo (usuarios, productos, etc.)

```javascript
const express = require('express');
const app = express();
const router = express.Router();

// Middleware específico del router
router.use((req, res, next) => {
  console.log(`[ROUTER] Ruta de usuario: ${req.method} ${req.url}`);
  next();
});

// Rutas asociadas al router de usuarios
router.get('/profile', (req, res) => {
  res.send('Perfil de usuario');
});

router.get('/settings', (req, res) => {
  res.send('Configuraciones del usuario');
});

// Asignar router a una ruta base
app.use('/user', router);

app.get('/', (req, res) => {
  res.send('Inicio');
});
```

📝 **Resultado**: el middleware se ejecuta **solo** en rutas que comienzan con `/user`, como `/user/profile`.

---

## 🧩 3. **Middleware de Manejo de Errores**
Se define con **cuatro parámetros**: `(err, req, res, next)`

### 💡 Uso común: Centralizar el manejo de errores de toda la app.

```javascript
const express = require('express');
const app = express();

// Ruta que simula un error
app.get('/error', (req, res) => {
  throw new Error('Algo salió mal!');
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error('[ERROR]', err.message);
  res.status(500).send('Ocurrió un error interno en el servidor.');
});
```

📝 **Resultado**: cualquier error que ocurra en una ruta será capturado por este middleware y no romperá la aplicación.

---

## 🧠 Resumen

| Tipo                         | ¿Dónde se aplica?                  | Uso común                                     |
|-----------------------------|------------------------------------|-----------------------------------------------|
| Middleware de aplicación    | En todas las rutas                 | Logging, auth global, parseo de body          |
| Middleware de enrutador     | Solo en rutas específicas          | Agrupación por recursos (usuarios, productos) |
| Middleware de manejo de errores | En errores de cualquier parte de la app | Mostrar mensajes amigables, evitar crash      |

---

Si querés, puedo ayudarte a **traducir estos conceptos al patrón middleware con Axios en React**, para mantener una coherencia conceptual entre backend y frontend. ¿Te gustaría eso?


---

# EXTRA: Que es el request y que es el response? 

- _[Material de lectura simple](https://robertomiguelz.blogspot.com/2018/02/que-es-http-request-y-response.html)_

Claro, acá te dejo el texto formateado de manera clara y estructurada:

---

# 🌐 Request y Response en el Contexto de la Web

## 📥 **Request (Petición)**

### ✅ **Definición:**
Una **request** es un mensaje que un **cliente** (como un navegador) envía a un **servidor** para solicitar una acción o datos.

### 🧪 **Ejemplo:**
Un usuario escribe una dirección web en su navegador.  
El navegador envía una **petición HTTP** al servidor solicitando la página.

### 🔧 **Componentes de una Request:**

- **Método HTTP:**  
  Define la acción que se desea realizar.  
  Ejemplos: `GET`, `POST`, `PUT`, `DELETE`.

- **URL:**  
  La dirección del recurso que se está solicitando.  
  Ejemplo: `https://miweb.com/productos`

- **Headers (Encabezados):**  
  Información adicional sobre la petición.  
  Ejemplo: tipo de contenido, cookies, autorización, etc.

- **Body (opcional):**  
  Datos que se envían junto con la petición.  
  Ejemplo: datos de un formulario o JSON con información de usuario.

---

## 📤 **Response (Respuesta)**

### ✅ **Definición:**
Una **response** es el mensaje que el **servidor** envía de vuelta al **cliente** después de procesar la petición.

### 🧪 **Ejemplo:**
El servidor procesa la solicitud del navegador y envía de regreso la **página web solicitada**.

### 🔧 **Componentes de una Response:**

- **Código de estado HTTP:**  
  Indica el resultado de la petición.  
  Ejemplos:
  - `200 OK` (todo salió bien)
  - `404 Not Found` (recurso no encontrado) _si algo fallo en el recurso_
  - `500 Internal Server Error` (error del servidor) _cuando se rompe algo internatemente_

- **Headers (Encabezados):**  
  Información adicional sobre la respuesta.  
  Ejemplo: tipo de contenido (`Content-Type`), caché, fecha, etc.

---

## 🧠 **Resumen visual**

| Elemento   | Request                            | Response                            |
|------------|------------------------------------|-------------------------------------|
| Quién lo envía | Cliente (navegador, app, etc.)    | Servidor                            |
| Cuándo sucede | Cuando se solicita una acción     | Al responder a esa solicitud        |
| Contenido     | Método, URL, headers, body (opcional) | Código de estado, headers, body     |
| Ejemplo       | `GET /productos`                 | `200 OK` con listado de productos   |




---

## **🎯 Challenge: Construyendo un API con Express**
### **Objetivo:**
Crear un servidor web con Express que maneje rutas, use middlewares y devuelva respuestas JSON.

### **Requisitos:**
1. Crear un proyecto Node.js e inicializar `package.json`.
2. Instalar y configurar Express.
3. Implementar rutas para:
   - `GET /` → Devuelve un mensaje de bienvenida.
   - `GET /chuckjokes` → Usando la api de chuck norris jokes -> hacer una peticion y mostrar el chiste
   
4. Usar middlewares:
   - `express.json()` para parsear JSON.
   - `express.urlencoded({ extended: true })` para datos de formularios.
   - `cors` para permitir peticiones de otros dominios.
   - **🚀Bonus**  > Middleware personalizado para loggear cada petición recibida. Manejar errores con un middleware adecuado.

