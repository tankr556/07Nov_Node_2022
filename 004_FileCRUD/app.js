
// const yargs = require("yargs")
// const file = require("./fileoperation")

//const { require } = require("yargs");

// yargs.command({
//     command: "add",
//     builder: {
//         name: {
//             type: String
//         },
//         email: {
//             type: String
//         },
//     },
//     handler: function (argv) {
//         const data = {
//             name: argv.name,
//             email: argv.email
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
// yargs.argv


//******************bio data************************ */

// const yargs = require("yargs")
// const file = require("./fileoperation")

// yargs.command({
//     command: "Biodata",
//     builder: {
//         Name: {
//             type: String
//         },
//         Dateofbirth: {
//             type: Number
//         },
//         Address: {
//             type: String
//         },
//         PhoneNumber: {
//             type: Number
//         },
//         Email: {
//             type: String
//         },
//         Gender: {
//             type: String
//         },
//         Maritalstatus: {
//             type: String
//         },
//     },
//     handler: function (argv) {
//         const data = {
//             Name: argv.Name,
//             Dateofbirth: argv.Dateofbirth,
//             Address: argv.Address,
//             PhoneNumber: argv.PhoneNumber,
//             Email: argv.Email,
//             Gender: argv.Gender,
//             Maritalstatus: argv.Maritalstatus
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
// yargs.argv


//**************************************************************/
//******find and filter and remove*****************************/
const yargs = require("yargs")
const file = require("./fileoperation")

yargs.command({
    command: "add",
    builder: {
        name: {
            type: String
        },
        task: {
            type: String
        }
    },
})

yargs.command({
    command: "viewbyname",
    builder: {
        name: {
            type: String
        }
    },
    handler: function (argv) {
        file.viewbyname(argv.name);
    }
})
yargs.argv