const geocode = require("./geocode")
const weather = require("./weather")

const city = process.argv[2]
if (!city) {
    console.log("enter city name");
    return
}
geocode.getGeoCode(city, (err, data) => {
    // if (err) {
    //     console.log("Invalid api");

    // }
    lat = data.lat;
    lng = data.lng;

    weather.getWeather(lat, lng, (err, data) => {
        // if (err) {
        //     console.log("Invalid api");
        //     return;
        // }

        console.log(data);
    })
})