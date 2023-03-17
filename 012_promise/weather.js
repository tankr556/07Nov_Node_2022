const axios = require("axios")

const getWeather = (lat, lng) => {

    return new Promise((resolve, reject) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=127d880d7784727f24c339fc6862b782&units=metric`;


        axios.get(url).then(result => {
            const temp = result.data.main.temp;
            const pressure = result.data.main.pressure
            const humidity = result.data.main.humidity
            const city = result.data.name

            return resolve({
                temp, pressure, humidity, city
            })

        }).catch(err => {
            return reject(err)
        })
    })


}

module.exports = { getWeather }