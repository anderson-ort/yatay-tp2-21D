# Recuperatorio : Servidor Backend para Gestión de Tarjetas de Crédito

## Consigna

Debes implementar un servidor backend en Node.js que gestione tarjetas de crédito asociadas a usuarios (identificados por email). El proyecto debe cumplir con los siguientes requisitos:

1. **Conexión a base de datos**: Elegir entre:
   - MySQL local (contenedor Docker) -> si es necesario les puedo proveer el Dockerfile o el docker-compose ubicada en la carpeta db
   - Supabase en la nube
   - MongoDB Atlas
   - SQLite

2. **Modelo principal**: 
   - Entidad `CreditCard` con los campos:
     - cardNumber (string, único)
     - cardHolder (string)
     - expirationDate (string)
     - cvv (string)
     - email (string, clave foránea/pk del usuario)

3. **Operaciones CRUD**:
   - Crear tarjeta
   - Obtener tarjetas por email de usuario
   - Actualizar tarjeta
   - Eliminar tarjeta

4. **Testing**:
   - Implementar al menos 1 test con Jest y Supertest que verifique una de las rutas CRUD

## Ayuda Técnica

### Dependencias recomendadas:
```bash
npm install express dotenv
# Para bases de datos:
# MySQL
npm install mysql2
# MongoDB
npm install mongoose
# SQLite
npm install better-sqlite3
# Supabase
npm install @supabase/supabase-js

# Testing
npm install --save-dev jest supertest
```

### Configuración básica de Jest:
En `package.json`:
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watchAll"
  },
  "jest": {
    "testEnvironment": "node",
    "coveragePathIgnorePatterns": [
      "/node_modules/"
    ]
  }
}
```

## Estructura de Carpetas Sugerida

```
/proyecto
│
├── /src
│   ├── /config
│   │   └── db.js          # Configuración de la base de datos
│   │
│   ├── /controllers
│   │   └── cards.controller.js # Lógica de las rutas de tarjetas
│   │
│   ├── /models
│   │   └── card.model.js  # Modelo y esquema de tarjetas
│   │
│   ├── /routes
│   │   └── cards.routes.js # Definición de rutas
│   │
│   ├── /tests
│   │   └── cards.test.js  # Tests de las rutas
│   │
│   ├── app.js             # Configuración principal de Express
│   └── server.js          # Inicio del servidor
│
├── .env                   # Variables de entorno
├── .gitignore
├── package.json
└── README.md

```

## Criterios de Evaluación

1. **Funcionalidad** (40%):
   - Todas las operaciones CRUD funcionan correctamente
   - La relación usuario-tarjeta se mantiene consistentemente

2. **Código y Estructura** (30%):
   - Organización clara del proyecto
   - Separación adecuada de responsabilidades
   - Manejo adecuado de errores
   - Variables de entorno

3. **Testing** (20%):
   - Test implementado y funcional
   - Cubre al menos un caso de uso principal

4. **Documentación** (10%):
   - README claro con instrucciones de instalación y uso
   - Comentarios en el código cuando sea necesario


## Forma de entrega
Se debera realizar un repositorio en Github | Gitlab | BitBucket con perfil de publico y pasar el archivo  `.env` en un txt que suben en la plataforma