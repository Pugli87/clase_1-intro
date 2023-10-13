// const logger = require("./module.js");

// logger.info("info function CommonJS");
// logger.log("log function CommonJS");

// para ejecutar index.js aquitar "type":"module" en el .json

const { leerUsuarios } = require("./archivos.js");
leerUsuarios();
