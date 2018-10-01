const cars = require('./cars.json');
const zipcodes = require('./zipCodesMX.json');
const products = require('./products.json');
const extensions = require('./extensions.json');
const occupations = require('./occupations.json');
// and so on

module.exports = function () {
  return {
    'autos': cars,
    'codigos-postales': zipcodes,
    'productos': products,
    'extensiones': extensions,
    'ocupaciones': occupations
  }
}