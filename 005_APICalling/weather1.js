const axios = require("axios")
var cityname = process.argv[2]

const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=127d880d7784727f24c339fc6862b782`;

axios.get(url).then(result => {
    const lon = result.data.coord.lon;
    const lat = result.data.coord.lat
    const cityname = result.data.name


    console.log(`
        Cityname:${cityname}
        Lon:${lon}
        Lat:${lat}
        `);

}).catch(err => {
    callback(err);
})


