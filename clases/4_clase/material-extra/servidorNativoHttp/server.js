const http = require('http')

const server = http.createServer((req,res) => {
    //console.log(req)

    /* const url = req.url
    const method = req.method */
    const { method, url } = req     // Object destructuring
    console.log(method, url)

    if(method == 'GET') {
        if(url == '/mensaje') {
            //https://developer.mozilla.org/es/docs/Web/HTTP/Status
            res.writeHead(200, {'content-type':'text/html'})
            res.end('<h1>Hola soy el servidor Http</h1>')
        }
        else if(url == '/fyh') {
            res.writeHead(200, {'content-type':'text/html'})
            res.end(`<h3>La fecha y hora es ${new Date().toLocaleString()}</h3>`)
        }
        else {
            res.writeHead(404, {'content-type':'text/html'})
            res.end(`<h3 style="color:red;">Error 404 recurso ${url} no encontrado</h3>`)
        }
    }
    else {
        res.writeHead(500, {'content-type':'text/html'})
        res.end(`<h3 style="color:orangered;">Error 500 ruta ${method} ${url} no implementada</h3>`)
    }
})

const PORT = 8080
server.listen(PORT, () => console.log(`Servidor Http escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
