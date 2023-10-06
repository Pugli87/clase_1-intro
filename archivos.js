const fs = require("fs");

const leerUsuarios = () => {
	fs.readFile(__dirname + "/usuarios.json", (error, data) => {
		if (error) {
			console.error(error);
			return;
		}

		console.log(data.toString());
	});
};

module.exports = {
	leerUsuarios,
};

fs.writeFile;

fs.appendFile;

fs.rename;
