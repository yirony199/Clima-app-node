const {
    argv
} = require('./config/yargs');

const {
    getLugarLatLng
} = require("./lugar/lugar");

const {
    getClima
} = require("./clima/clima");



let getInfo = async () => {
    try{
        let coors = await getLugarLatLng(argv.direccion);
        let temperatura = await getClima(coors.lat, coors.lng);
        return `El clima en ${ coors.direccion } es de ${temperatura}`;
    }catch(e){
        return `No se pudo determinar el clima en ${ argv.direccion }`;
    }
  
};

getInfo()
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));