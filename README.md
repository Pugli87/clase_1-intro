                                              Módulos CommonJS

node.js trabaja nativamente la modularidad con commonJS el cual nos permite reutilizar un modulo en cualquier otra parte de la aplicacion, un módulo CommonJS es un fragmento de código JavaScript reutilizable que exporta objetos especiales que están disponibles para su uso en cualquier código donde se necesite esa dependencia. Las dos ideas principales detrás de los módulos CommonJS son el objeto exports, que contiene lo que el módulo quiere poner a disposición de otras partes del sistema, y la función require, que es utilizada por algunos módulos para importar el objeto exports de otros.

Este proceso se realizar atravez del

module.js

const info = msg => {
console.log(`Info: ${msg}`);
};

const log = msg => {
console.log(`Log: ${msg}`);
};

module.exports = {
info,
log,
};

y para importarlo se utiliza el require('ruta del modulo exportado');

index.js

const logger = require('./module');

logger.info('info function');
logger.log('log function');
