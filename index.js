// server.js
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const db = jsonServer.router(require('./db.js')());
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

function postToGet(req, res, next) {
  //convertir en metodo GET
  req.method = 'GET';
  //req.query = req.body
  next();
}
function allGet(req, res, next) {
  //req.query = req.body
  next();
}
server.get('*', allGet);
server.post('/cotizacion', postToGet);
server.post('/productos', postToGet);
server.post('/extensiones', postToGet);

server.use(db);

port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('JSON Server is running at localhost:' + port);
});

//convertir csv to json
/* let csvToJson = require('convert-csv-to-json');
 
let fileInputName = 'docs/CPdescarga.txt'; 
let fileOutputName = 'docs/CPdescarga.txt.json';
 
csvToJson.fieldDelimiter('|').generateJsonFileFromCsv(fileInputName,fileOutputName); */