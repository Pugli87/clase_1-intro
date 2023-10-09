# clase_1-intro

                                        Variables globales

Se declárala como propiedad de un objeto Global.

global.foo = 3;

En la sección Global se incluyen clases importantes como:

Buffer – objeto que se utiliza para las operaciones con datos binarios.
Process – objeto del proceso, aquí es donde se encuentran la mayoría de los datos.

Por ejemplo, la propiedad process.argv contiene un array de argumentos de línea de comandos.
El elemento nulo será el nombre de la aplicación que ejecuta node, el segundo será el nombre del escenario más ejecutado, y sólo después los propios parámetros.

node.js trabaja nativamente la modularidad con commonJS el cual nos permite reutilizar un modulo en cualquier otra parte de la aplicacion, este proceso se realizar atravez del

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
const logger = require('./logger')const logger = require('./module');

logger.info('info function');
logger.log('log function');

                                        MODULOS ECMAScript

Apartir de la version 14.x node.js soporta la integracion de modulos segun el estandar de ECMAScript. Para ello, podemos seguir dos caminos. El primero es darle a los archivos la extensión .mjs para que podamos usar módulos ECMAScript, o establecer el campo "type", en el archivo package.json, con el valor "module".

Sigamos el segundo camino y creemos en una carpeta vacía con el comando

npm init -y

El archivo es por defecto package.json y añadimos un campo "type" con el valor "module" al mismo.

A continuación, creamos un módulo import.js

export const info = msg => {
console.log(`Info: ${msg}`);
};

export const log = msg => {
console.log(`Log: ${msg}`);
};

Y en el programa principal app.js, importamos el módulo especificado y llamamos a las funciones.

import { info, log } from './import.js';

info('info function');
log('log function');

Así hemos llevado a cabo dos enfoques para conectar los módulos Common.js y ECMAScript

NOTA: para commonJS eliminar la linea de codigo "type": "module"; del .json y ejecutar node index.js

## para ECMAScript ejecutar node app.js con el "type": "module"; del .json

                            TRABAJO DE ARCHIVOS fileSystem
