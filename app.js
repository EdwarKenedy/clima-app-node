const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async direccion => {
  try {
    let coordenadas = await lugar.getLugarLatLng(direccion);
    let temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);
    return `EL clima en ${argv.direccion} es de ${temperatura}`;
  } catch (error) {
    return `No se pudo determinar el clima en ${direccion}`;
  }
};

getInfo(argv.direccion)
  .then(resp => console.log(resp))
  .catch(err => console.log(err));
