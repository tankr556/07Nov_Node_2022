// const { Country } = require("country-state-city");

var headers = new Headers();
headers.append("X-CSCAPI-KEY", "Z045SFRvZFFxc1BpZnFNTlFHeTlVZ0ZsSGtmU1dNN0l5cHpDWkRaUA==");

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
        var options = "<option>--Select country--</option>";
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

        var options = "<option>--Select State--</option>";
        for (var i = 0; i < result.length; i++) {
            options = options + "<option value=" + result[i].iso2 + ">" + result[i].name + "</option>"
        }
        state.innerHTML = options
    }).catch(err => {
        console.log(err);
    })
}
const getCities = (scode) => {
    fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/states/${scode}/cities`, requestOptions).then(response => {
        return response.json();
    }).then(result => {

        var options = "<option>--Select city--</option>";
        for (var i = 0; i < result.length; i++) {
            options = options + "<option>" + result[i].name + "</option>"
        }
        city.innerHTML = options
    }).catch(err => {
        console.log(err);
    })
}
