//Juego adivina numero en consola

const readline = require("readline");
const fs = require("fs").promises;
const { program } = require("commander");
require("colors");
program.option(
	"-f, --file [type]",
	"file for saving game results",
	"results.txt"
);
program.parse(process.argv);

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let count = 0;
const logFile = program.opts().file;
const mind = Math.floor(Math.random() * 10) + 1;

const isValid = (value) => {
	if (isNaN(value)) {
		console.log("Escribe un número!".red);
		return false;
	}
	if (value < 1 || value > 10) {
		console.log("El número debe estar entre 1 y 10".red);
		return false;
	}
	return true;
};

const log = async (data) => {
	try {
		await fs.appendFile(logFile, `${data}\n`);
		console.log(`Se logró guardar el resultado en el archivo ${logFile}`.green);
	} catch (err) {
		console.log(`No se logró guardar el resultado ${logFile}`.red);
	}
};

const game = () => {
	rl.question(
		"Escribe un número del 1 al 10 para adivinar el que tengo en mente: "
			.yellow,
		(value) => {
			let a = +value;
			if (!isValid(a)) {
				game();
				return;
			}
			count += 1;
			if (a === mind) {
				console.log(
					"Felicidades, has adivinado el número en %d intento(s)".green,
					count
				);
				log(
					`${new Date().toLocaleDateString()}: Felicidades, has adivinado el número en ${count} intento(s)`
				).finally(() => rl.close());
				return;
			}
			console.log("Todavía no has adivinado".red);
			game();
		}
	);
};

game();
