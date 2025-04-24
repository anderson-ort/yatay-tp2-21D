# 📚 Clase: Introducción a APIs en el Desarrollo de Software

## 🎯 Objetivos de la clase
- Entender qué es una API y su rol en el ecosistema digital.
- Conocer los diferentes tipos de APIs.
- Comprender el modelo RESTful y cómo se implementa.
- Introducción a arquitecturas comunes (MVC y microservicios).
- Implementar una API básica en Node.js con Express.
- Desarrollar un proyecto práctico: API de gestión de carpetas y archivos.

---

## 🧠 Parte Teórica: ¿Qué es una API?

Una **API (Application Programming Interface)** permite que dos aplicaciones se comuniquen entre sí. Es una interfaz que define cómo los diferentes componentes deben interactuar.

---

## 🔍 Tipos de APIs + Ejemplos en JavaScript (Node.js + Express)

### 1. **APIs Públicas**
Disponible para cualquier desarrollador.

```js
// Ejemplo: Consumo de API pública de Pokémon
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(res => res.json())
  .then(data => console.log(data.name)); // pikachu
```

---

### 2. **APIs Privadas**
Solo para uso interno de una organización.

```js
// Simulación de endpoint privado con token
app.get('/private', (req, res) => {
  const token = req.headers.authorization;
  if (token === '123456') {
    res.send('Acceso autorizado');
  } else {
    res.status(403).send('Acceso denegado');
  }
});
```

---

### 3. **APIs de Partners**
Acceso restringido a terceros de confianza.

```js
// Verificación con clave API para partners
app.get('/partner-data', (req, res) => {
  const apiKey = req.query.apiKey;
  if (apiKey === 'clave-partner') {
    res.send('Datos compartidos');
  } else {
    res.status(401).send('No autorizado');
  }
});
```

---

### 4. **APIs Compuestas**
Unifican múltiples endpoints en una sola respuesta.

```js
// Simulación de respuesta compuesta
app.get('/user-dashboard', async (req, res) => {
  const user = { id: 1, name: "Ana" };
  const notifications = [{ msg: "Nuevo mensaje" }];
  res.json({ user, notifications });
});
```

---

### 5. **API RESTful**
Organiza recursos con métodos HTTP.

_[Material extra de lo que es una api restful](https://bravedeveloper.com/2021/09/01/que-es-rest-restful-api-restful-y-json/)_

### ¿Qué es **REST**?

**REST** significa **Representational State Transfer** (Transferencia de Estado Representacional).  
Es un **estilo de arquitectura** para diseñar servicios web. Fue definido por Roy Fielding en su tesis doctoral en el año 2000.

REST propone un conjunto de **principios** que permiten que diferentes sistemas se comuniquen entre sí usando HTTP de una forma sencilla, predecible y escalable.

---

### ¿Qué es **RESTful**?

Cuando decimos que algo es **RESTful**, nos referimos a que **sigue los principios y restricciones de REST**.  
Por ejemplo, una API (interfaz de programación) que implementa REST de forma correcta se llama **API RESTful**.

---

### ¿Qué es una **API RESTful**?

Una **API RESTful** es un conjunto de **endpoints** o rutas accesibles a través de HTTP, que permiten a diferentes aplicaciones interactuar entre sí usando operaciones como:

- `GET`: para **leer** datos
- `POST`: para **crear** datos
- `PUT` / `PATCH`: para **actualizar** datos
- `DELETE`: para **eliminar** datos

Todo esto de manera estructurada y predecible, normalmente usando **URLs bien definidas** que representan recursos.  
Ejemplo clásico:

| Método | URL                  | Acción                     |
|--------|----------------------|----------------------------|
| GET    | `/productos`         | Listar productos           |
| POST   | `/productos`         | Crear un producto nuevo    |
| GET    | `/productos/123`     | Obtener detalle del producto con ID 123 |
| PUT    | `/productos/123`     | Actualizar el producto 123 |
| DELETE | `/productos/123`     | Eliminar el producto 123   |

---

### En resumen:

- **REST**: un conjunto de principios para diseñar servicios web.[Arquitectura]
- **RESTful**: algo que sigue esos principios. [Implementacion]
- **API RESTful**: una interfaz (API) que implementa REST para permitir la comunicación entre aplicaciones, usando HTTP de forma coherente y estructurada.

---

```js
// CRUD básico con Express (REST)
app.get('/tasks', (req, res) => res.json(tasks));
app.post('/tasks', (req, res) => { /* agregar tarea */ });
app.put('/tasks/:id', (req, res) => { /* actualizar tarea */ });
app.delete('/tasks/:id', (req, res) => { /* eliminar tarea */ });
```

---

### 6. **API SOAP**
Más estructurada, basada en XML (no muy usada en JS moderno, pero útil saber).

```xml
<!-- Ejemplo SOAP en XML (teórico) -->
<soap:Envelope>
  <soap:Body>
    <getUserData xmlns="http://example.com/api"/>
  </soap:Body>
</soap:Envelope>
```

---

### 7. **Webhooks**
Envían información cuando ocurre un evento.

```js
// Ejemplo: recibir webhook
app.post('/webhook', (req, res) => {
  console.log('Evento recibido:', req.body);
  res.sendStatus(200);
});
```

## 🔁 ¿Qué es un **webhook**?

Un **webhook** es una forma de que una aplicación **envíe información automáticamente a otra** en tiempo real **cuando ocurre un evento específico**.

Es como decirle a una app:  
> “Cada vez que pase *esto*, avisame acá 👉 `https://miapp.com/webhook`”.

---

## 📌 ¿Dónde se usa un webhook?

Se usa cuando querés **recibir notificaciones automáticas** entre sistemas, por ejemplo:

- Cuando alguien hace un pago con **MercadoPago o PayPal** ➜ Te notifican a tu backend.
- Cuando subís una nueva versión en **GitHub** ➜ Podés notificar a un sistema CI/CD.
- Cuando alguien se suscribe a tu newsletter en **Mailchimp** ➜ Se dispara un webhook a tu backend.
- En **plataformas de mensajería** (como Slack o Telegram) para bots que reaccionan a eventos.

---

## 🛠️ ¿Cómo se **crea un webhook**?

Un webhook **no se "crea" como tal**, sino que vos:

1. **Exponés una URL** en tu backend (como `/webhook`).
2. Vas a la **app externa** (GitHub, MercadoPago, etc.) y le decís:  
   👉 “Mandame los eventos a esta URL”.

---

### 8. **GraphQL**
Permite definir qué datos se quieren.

```js
// Ejemplo usando GraphQL (teórico)
query {
  user(id: "1") {
    name
    email
  }
}
```

---
### API de ejemplo: 
* https://rickandmortyapi.com/
* https://swapi.dev/
* https://jsonplaceholder.typicode.com/
* https://fakeapi.platzi.com/
* https://api.escuelajs.co/graphql [GRAPHQL]

```graphql
query GetProducts {
  products {
    id
    title
    price
    description
    category {
      id
      name
    }
    images
  }
}
```

---

## 🧱 RESTful: MVC vs Microservicios

### 🔹 REST + MVC (Model-View-Controller)
Separación clara entre lógica de negocio, rutas y datos. Ideal para apps monolíticas pequeñas a medianas.

```
src/
├── controllers/
├── routes/
├── models/
└── index.js
```

### 🔹 REST + Microservicios
Cada componente es independiente y comunica por APIs. Escalable, ideal para sistemas distribuidos.

👉 **Material extra Recomendado para investigacion**: también explorar **GraphQL**, **gRPC**, o **event-driven** (Kafka, RabbitMQ) para escenarios más complejos.

---

## EXTRA 

## 🔁 Versionado de APIs

El **versionado** permite realizar mejoras o cambios sin romper las integraciones existentes.

### 🧭 ¿Por qué versionar una API?
- Mantener compatibilidad con clientes antiguos.
- Desplegar nuevas funcionalidades sin afectar lo existente.
- Controlar y planificar migraciones.

---

### ✏️ Formas comunes de versionado

#### 1. **En la URL** (más común en REST)
```http
GET /api/v1/users
POST /api/v2/orders
```

#### 2. **En los headers**
```http
GET /users
Accept: application/vnd.miapi.v1+json
```

#### 3. **En parámetros de query** (menos recomendado)
```http
GET /users?version=1
```

---

### 💡 Ejemplo en Express:

```js
const v1Routes = require('./routes/v1');
const v2Routes = require('./routes/v2');

app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);
```

```
// Estructura
routes/
├── v1/
│   └── users.js
└── v2/
    └── users.js
```

Así, podés tener dos versiones distintas de una misma funcionalidad coexistiendo.

---

## 📦 Estructura estandarizada de respuestas JSON

Tener una estructura clara de respuestas facilita el desarrollo y el debugging.

### 🔁 Formato recomendado:

```json
{
  "status": "success",
  "message": "Usuario creado con éxito",
  "data": {
    "id": 123,
    "nombre": "Andru"
  }
}
```

---

### 🔥 Tipos de respuesta sugeridos

| Tipo        | HTTP Code | Estructura                                        |
|-------------|-----------|---------------------------------------------------|
| Éxito       | 200/201   | `status: success`, `data`, `message`              |
| Error       | 400/404   | `status: error`, `message`, `errors (opcional)`   |
| Interno     | 500       | `status: fail`, `message`, `details (opcional)`   |

---

### 💻 Ejemplo Express: respuesta estándar

```js
// Respuesta exitosa
res.status(200).json({
  status: "success",
  message: "Lista de carpetas",
  data: ["carpeta1", "carpeta2"]
});

// Respuesta con error
res.status(404).json({
  status: "error",
  message: "Carpeta no encontrada"
});
```

---

### 🛠 Recomendación: Middleware de manejo de errores

```js
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    status: "fail",
    message: "Error inesperado del servidor",
    details: err.message
  });
});
```

---
**Bibliografia**
- [BraveDeveloper](https://bravedeveloper.com/)
- [Three Tier ARchitecture](https://medium.com/@kasukurthibhargav/understanding-the-three-tier-architecture-in-node-js-a-comprehensive-guide-384c410158a2)