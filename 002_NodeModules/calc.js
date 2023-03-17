function add(a, b, callback) {
    callback(a + b, a * b)
}

function mul(a, b) {
    console.log(a * b);
}

function square(a, callback) {
    console.log(a * a);
}

module.exports = { add, mul, square }