// const allStudent = (id, callback) => {

//     var st = ["Hemali", "Ashok", "Vaibhav", "Vidhan"]
//     callback(st[id])

// }

const info = (name) => {

    return new Promise((resolve, reject) => {
        return resolve(`${name} is node student`)
    })

}


const allStudent = (id) => {

    return new Promise((resolve, reject) => {
        var st = ["Hemali", "Ashok", "Vaibhav", "Vidhan"]
        return resolve(st[id])
        return reject("err")

    })

}





module.exports = { allStudent, info }