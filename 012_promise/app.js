// const geocode = require("./geocode")
// const weather = require("./weather")

// const city = process.argv[2]
// if (!city) {
//     console.log("enter city name");
//     return
// }
// geocode.getGeoCode(city, (err, data) => {
//     // if (err) {
//     //     console.log("Invalid api");

//     // }
//     lat = data.lat;
//     lng = data.lng;

//     weather.getWeather(lat, lng, (err, data) => {
//         // if (err) {
//         //     console.log("Invalid api");
//         //     return;
//         // }

//         console.log(data);
//     })
// })


// *************************Weather app*****************************
const weather = require("./weather")
const geocode = require("./geocode")

// geocode.getGeoCode("surat,gujarat").then(data => {
//     return weather.getWeather(data.lat, data.lng)
// }).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// })

const myweather = async () => {
    try {
        const data = await geocode.getGeoCode("surat,gujarat");
        const result = await weather.getWeather(data.lat, data.lng);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

myweather()