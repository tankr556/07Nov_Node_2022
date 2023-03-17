// const yargs = require("yargs")
// const file = require("./fileoperation1")

// yargs.command({
//     command: "MarkSheet",
//     builder: {
//         Math: {
//             type: Number
//         },
//         science: {
//             type: Number
//         },
//         english: {
//             type: Number
//         },
//         hindi: {
//             type: Number
//         },
//     },
//     handler: function (argv) {
//         const data = {
//             Math: argv.Math,
//             science: argv.science,
//             english: argv.english,
//             hindi: argv.hindi
//         }
//         file.addFile(data);
//     }
// })
// yargs.command({
//     command: "view",
//     handler: function () {
//         file.viewFile()
//     }
// })
//yargs.argv

//*************************************************************************/

//const { argv } = require("yargs");
const yargs = require("yargs");
const file = require("./fileoperation1");

yargs.command({
    command: "Product",
    builder: {
        ProductID: {
            type: "number"
        },
        ProductName: {
            type: "String"
        },
        Productrupees: {
            type: "String"
        },


    },
    handler: (argv) => {
        const newProduct = {
            ProductID: argv.ProductID,
            ProductName: argv.ProductName,
            Productrupees: argv.Productrupees,
        };
        file.addNew(newProduct);
    }
})
yargs.command({
    command: "view",
    handler: () => {
        file.readFile();
    }
});

yargs.command({
    command: "remove",
    builder: {
        ProductID: {
            type: 'Number'
        }
        ,
    },
    handler: (argv) => {
        file.remove(argv.ProductID);
    }
})
yargs.argv;