// const fs = require("fs")

// const addFile = (data) => {
//     const dt = JSON.stringify(data)
//     fs.writeFile("userdetail.json", dt, () => {
//         console.log("File Written Successfully");
//     })
// }
// const viewFile = () => {
//     const data = view()
//     console.log(data);
// }

// const view = () => {
//     var dt;
//     var data = fs.readFileSync("userdetail.json", "utf-8")
//     dt = JSON.parse(data)
//     return dt;
// }

//module.exports = { addFile }

//**************************************************************************/

const fs = require('fs');
const addNew = (data) => {
    let allData = read();
    const duplicate = allData.find(e => {
        return e.ProductID == data.ProductID
    });
    if (duplicate) {
        console.log("Product ID already exists.Enter a new one!");
        return;
    } else {
        allData.push(data);
        fs.writeFileSync("File.JSON", JSON.stringify(allData));
        console.log("New Product added!");
    };
};
const readFile = () => {
    const content = fs.read();
    console.log(content);
};
const read = () => {
    try {
        let content = fs.readFileSync('File.JSON', "utf-8");
        content = JSON.parse(content);
        return content;
    } catch (error) {
        return [];
    };
};
const remove = (id) => {
    let allData = read();
    let newData = allData.filter(e => {
        return e.ProductID != id
    });
    fs.writeFileSync('File.JSON', JSON.stringify(newData));
    console.log("Product data updated!");
};
module.exports = { addNew, readFile, remove }