const axios = require('axios');

const getClima = async (lat,lng) =>{
    let clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=e2f84d0fad91e4765b6543d428eb51ff`);
    return clima.data.main.temp;
}
module.exports = {
    getClima
}