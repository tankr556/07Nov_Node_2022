

// const fs = require("fs")
// console.log("start");

// const data = fs.readFileSync("test.txt", "utf-8")
// console.log(data);
// console.log("end");


const fs = require("fs")
console.log("start");
fs.readFile("test.txt", "utf-8", (err, data) => {
    console.log(data);
})
console.log("end");