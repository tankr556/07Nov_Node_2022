const axios = require("axios")

// var lon = process.argv[2]
// var lat = process.argv[3]
const getWeather = (lat, lng, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=127d880d7784727f24c339fc6862b782&units=metric`;

    axios.get(url).then(result => {
        const temp = result.data.main.temp;
        const pressure = result.data.main.pressure
        const humidity = result.data.main.humidity
        const city = result.data.name

        callback(undefined, {
            temp, pressure, humidity, city
        })
        // console.log(`
        //     City:${city},
        //     Temp:${temp},
        //     Pressure:${pressure}
        //     Humidity:${humidity}

        // `);
    }).catch(err => {
        callback(err);
    })
}
module.exports = { getWeather }