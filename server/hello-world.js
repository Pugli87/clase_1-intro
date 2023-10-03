const http = require("node:http"); // Importar el módulo http

const hostname = "127.0.0.1"; // Dirección IP en la que escuchará el servidor
const port = 3000; // Puerto en el que escuchará el servidor

const server = http.createServer((req, res) => {
	// Crear un servidor HTTP y definir una función de devolución de llamada
	res.statusCode = 200; // Código de estado de la respuesta HTTP (200 significa "OK")
	res.setHeader("Content-Type", "text/plain"); // Configurar el encabezado de la respuesta
	res.end("Hello, World!\n"); // Enviar la respuesta al cliente
});

server.listen(port, hostname, () => {
	// Iniciar el servidor y escuchar en el puerto y dirección IP especificados
	console.log(`Server running at http://${hostname}:${port}/`);
});
