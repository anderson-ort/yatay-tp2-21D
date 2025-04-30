import express from "express"

const app = express();
const PORT = 3000;
const HOST = "127.0.0.1";

app.use(express.json());

// Enable parsing of URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send(`
    <h1>API de Ejemplo para Clase Node.js</h1>
    <ul>
      <li><strong>Basic Auth:</strong> GET /productos</li>
      <li><strong>JWT:</strong> POST /login → GET /pedidos</li>
      <li><strong>API Key:</strong> GET /inventario</li>
    </ul>
    <p>Usar Postman o cURL para probar los endpoints</p>
  `);
});


app.post('/login', generateToken);


app.get('/productos', authMiddleware, (req, res) => {
    res.json([{ id: 1, nombre: "Laptop Gamer" }, { id: 2, nombre: "Teclado Mecánico" }]);
});

app.get('/pedidos', validateToken, (req, res) => {
    res.json({
        mensaje: 'Acceso autorizado',
        usuario: req.user, // accedés al payload del token
        pedidos: [{ id: 1, total: 100 }, { id: 2, total: 200 }]
    });
});



app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
    console.log('Endpoints disponibles:');
    console.log(`- GET /`);
    console.log(`- GET /productos (Basic Auth)`);
    console.log(`- POST /login (JWT)`);
    console.log(`- GET /pedidos (JWT)`);
    console.log(`- GET /inventario (API Key)`);
});
