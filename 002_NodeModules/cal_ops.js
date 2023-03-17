const calc = require("./calc");

var a = 10;
var b = 20;

calc.add(a, b, (result) => {
    console.log(result);
    calc.square(result, (r) => {
        console.log(r);
    })
})