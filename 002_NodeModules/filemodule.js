//********************************sync**************************

const fs = require("fs")

//fs.writeFileSync("test.txt", "this fs module demo")
//fs.appendFileSync("test.txt", "this fs module demo")

// const data = fs.readFileSync("tes.txt", "utf-8")
// console.log(data);

// fs.renameSync("test.txt", "home.txt")

// fs.unlinkSync("home.txt")

// fs.mkdirSync("practice")
// console.log(fs.existsSync("test.txt"));
// console.log(fs.existsSync("practice"));

//****************************async**********************************/

// fs.writeFile("test.txt", "this is my file", () => {
//     console.log("file written successfully");
// })

// fs.readFile("test.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })