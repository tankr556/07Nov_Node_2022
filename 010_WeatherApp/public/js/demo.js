var headers = new Headers();
headers.append("X-CSCAPI-KEY", "aHAwSE1FQUpHMExPYU95TmZJT2g2c29iTFpyN0NOVWc1eUk5emZKbw==");

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

const getContries = () => {
    fetch("https://api.countrystatecity.in/v1/countries", requestOptions).then(response => {
        return response.json();
    }).then(result => {

        console.log(result[0]);
        var options = "<option>---Select country---</option>";
        for (var i = 0; i < result.length; i++) {
            options = options + "<option value=" + result[i].iso2 + ">" + result[i].name + "</option>"
        }
        country.innerHTML = options

    }).catch(err => {
        console.log(err);
    })
}

var countryCode;
const getStates = (ccode) => {

    countryCode = ccode;
    fetch(`https://api.countrystatecity.in/v1/countries/${ccode}/states`, requestOptions).then(response => {
        return response.json();
    }).then(result => {

        var options = "<option>---Select State---</option>";
        for (var i = 0; i < result.length; i++) {
            options = options + "<option value=" + result[i].iso2 + ">" + result[i].name + "</option>"
        }
        //console.log(options);
        state.innerHTML = options

    }).catch(err => {
        console.log(err);
    })

}

var statecode;
const getCities = (scode) => {

    statecode = scode
    fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/states/${scode}/cities`, requestOptions).then(response => {
        return response.json();
    }).then(result => {

        var options = "<option>---Select city---</option>";
        for (var i = 0; i < result.length; i++) {
            options = options + "<option value=" + result[i].name + ">" + result[i].name + "</option>"
        }
        //console.log(options);
        city.innerHTML = options

    }).catch(err => {
        console.log(err);
    })

}


const getWeather = (cityname) => {

    var location = countryCode + "," + statecode + "," + cityname
    fetch(`/weather?location=${location}`).then(data => {
        return data.json()
    }).then(result => {
        console.log(result);
        loc.innerHTML = location
        cTemp.innerHTML = result.temp;
        cPressure.innerHTML = result.pressure
        cHumidity.innerHTML = result.humidity
    })
}