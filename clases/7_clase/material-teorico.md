## 📚 Clase: **Autenticación con JWT, Middlewares y Persistencia con SQL/NoSQL**

---

### 🧠 Parte 1: Teoría – Autenticación con JWT

**¿Qué es JWT?**

* *JWT (JSON Web Token)* es un estándar abierto (RFC 7519) que define un formato compacto y autónomo para transmitir información segura entre partes como un objeto JSON.
* Se utiliza principalmente para **autenticación sin estado**.

**Estructura de un JWT:**

```
HEADER.PAYLOAD.SIGNATURE
```

* **Header**: tipo de token + algoritmo
* **Payload**: claims (información)
* **Signature**: firma HMAC/RS256 para verificar integridad

**Ventajas:**

* Stateless (el servidor no guarda sesión)
* Escalable (ideal para microservicios y APIs)
* Flexible (se puede usar en headers, cookies, localStorage)

---

### ⚙️ Parte 2: Implementación técnica – JWT + Middlewares + JSON DB

#### Estructura del proyecto

```
project/
├── db/users.json
├── middlewares/auth.js
├── routes/auth.js
├── routes/protected.js
├── utils/jwt.js
├── app.js
```

---

### 🛠 app.js

```js
import express from 'express'
import authRoutes from './routes/auth.js'
import protectedRoutes from './routes/protected.js'

const app = express()
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/protected', protectedRoutes)

app.listen(3000, () => {
	console.log('Server running on port 3000')
})
```

---

### 🔐 utils/jwt.js

```js
import jwt from 'jsonwebtoken'
const SECRET = 'supersecreta'

export function generateToken(payload) {
	return jwt.sign(payload, SECRET, { expiresIn: '1h' })
}

export function verifyToken(token) {
	return jwt.verify(token, SECRET)
}
```

---

### 📁 db/users.json (falsa base de datos)

```json
[
	{ "id": 1, "email": "test@example.com", "password": "1234" }
]
```

---

### 🔑 routes/auth.js

```js
import express from 'express'
import fs from 'fs/promises'
import { generateToken } from '../utils/jwt.js'

const router = express.Router()

router.post('/login', async (req, res) => {
	const { email, password } = req.body
	const data = await fs.readFile('./db/users.json', 'utf-8')
	const users = JSON.parse(data)

	const user = users.find(u => u.email === email && u.password === password)
	if (!user) return res.status(401).json({ error: 'Credenciales inválidas' })

	const token = generateToken({ id: user.id, email: user.email })
	res.json({ token })
})

export default router
```

---

### 🛡 middlewares/auth.js

```js
import { verifyToken } from '../utils/jwt.js'

export function authMiddleware(req, res, next) {
	const authHeader = req.headers.authorization
	if (!authHeader) return res.status(401).json({ error: 'Token requerido' })

	const token = authHeader.split(' ')[1]
	try {
		const decoded = verifyToken(token)
		req.user = decoded
		next()
	} catch (err) {
		res.status(401).json({ error: 'Token inválido o expirado' })
	}
}
```

---

### 🔒 routes/protected.js

```js
import express from 'express'
import { authMiddleware } from '../middlewares/auth.js'

const router = express.Router()

router.get('/profile', authMiddleware, (req, res) => {
	res.json({ message: 'Acceso permitido', user: req.user })
})

export default router
```

---

## 💡 Parte 3: Persistencia de datos

| Tecnología    | Tipo             | Uso ideal                           | Herramienta |
| ------------- | ---------------- | ----------------------------------- | ----------- |
| PostgreSQL    | SQL relacional   | Datos estructurados, relaciones     | Supabase    |
| MongoDB Atlas | NoSQL documental | Datos flexibles, sin esquema rígido | Mongo Cloud |

### Ejemplo de diseño:

#### PostgreSQL (Supabase)

```sql
CREATE TABLE users (
	id UUID PRIMARY KEY,
	email TEXT NOT NULL,
	password TEXT NOT NULL
);
```

#### MongoDB

```js
{
	_id: ObjectId,
	email: "test@example.com",
	password: "hashed"
}
```

---

### ✏️ Actividad sugerida para estudiantes

1. Implementar login con JSON DB (como el ejemplo).
2. Cambiar la persistencia a Mongo o Supabase.
3. Agregar un middleware que solo deje pasar si el `user.email` termina en `@miempresa.com`.
