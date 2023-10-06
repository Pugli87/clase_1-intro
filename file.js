const fs = require("fs").promises;

fs.readdir(__dirname) // leemos todos los archivos del directorio actual
	.then((files) => {
		return Promise.all(
			files.map(async (filename) => {
				const stats = await fs.stat(filename);
				return {
					Name: filename,
					Size: stats.size,
					Date: stats.mtime,
				};
			})
		);
	})
	.then((result) => console.table(result));

// para ejecutar file.js aquitar "type":"module" en el .json
