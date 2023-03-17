const axios = require("axios")

const getGeoCode = (city, callback) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=89469848dbfa4f12a513b2812c70230d`

    axios.get(url).then(result => {
        const dt = result.data.results[0].geometry;

        const lat = dt.lat
        const lng = dt.lng

        callback(undefined, {
            lat, lng
        })

        //console.log(`
        //  lat:${lat}
        //lng:${lng}


        //`);
    }).catch(err => {
        callback(err)
    })
}
module.exports = { getGeoCode }