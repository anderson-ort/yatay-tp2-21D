import { basicAuth } from "express-basic-auth"


// 2. BASIC AUTH
const authMiddleware = (req, res, next) => {
    const credentials = basicAuth(req);
    const validUser = process.env.BASIC_USER || 'admin';
    const validPass = process.env.BASIC_PASS || 'admin123';

    if (!credentials || credentials.name !== validUser || credentials.pass !== validPass) {
        res.set('WWW-Authenticate', 'Basic realm="Acceso restringido"');
        return res.status(401).send('Autenticación requerida');
    }
    next();
};




// 4. API KEY
const API_KEY = process.env.API_KEY || 'KEY-UNIVERSIDAD-2024';

const apiKeyMiddleware = (req, res, next) => {
    const key = req.headers['x-api-key'] || req.query.api_key;

    if (key !== API_KEY) {
        return res.status(403).json({
            error: 'Acceso denegado',
            solucion: `Enviar API Key válida en header 'x-api-key'`
        });
    }
    next();
};

app.get('/inventario', apiKeyMiddleware, (req, res) => {
    res.json([
        { producto: "Monitor 24\"", stock: 50 },
        { producto: "Mouse Inalámbrico", stock: 120 }
    ]);
});

// Manejador de errores para JWT
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({
            error: 'Token inválido o expirado',
            solucion: 'Hacer login en /login para obtener nuevo token'
        });
    }
    next(err);
});

