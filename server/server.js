const http = require("node:http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
	// Configura la respuesta con el encabezado adecuado para HTML
	res.setHeader("Content-Type", "text/html");

	// Lee el archivo HTML y lo envía como respuesta
	fs.readFile("index.html", "utf8", (err, data) => {
		if (err) {
			// Maneja errores si no se puede leer el archivo
			res.statusCode = 500;
			res.end("Error interno del servidor");
			return;
		}
		// Envía el contenido del archivo como respuesta
		res.statusCode = 200;
		res.end(data);
	});
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
