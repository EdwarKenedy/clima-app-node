const axios = require('axios');

const getClima = async (lat, lng) => {
  let resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=2ab7f4421aef155451afa5f58c3fb28d`
  );
  if (resp.data.cod === '400') {
    throw new Error(
      `Las coordenadas ingresadas son incorrectas latitud: ${lat} - longitud: ${lng}`
    );
  } else {
    return resp.data.main.temp;
  }
};

module.exports = {
  getClima
};
