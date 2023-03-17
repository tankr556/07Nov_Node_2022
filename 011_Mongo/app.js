const mongoClient = require("mongodb").MongoClient

const dbUrl = "mongodb://127.0.0.1:27017"
const dbName = "example"


mongoClient.connect(dbUrl).then(client=>{
    console.log("db connected...");
    const db = client.db(dbName)
   

}).catch(err=>{
    console.log(err);
})

mongoClient.connect(dbUrl, (err, client) => {
    if (err) {
        console.log(err);
        return
    }
    console.log("db connected successfully");

    const db = client.db(dbName)
    console.log("db connected");

    //*****new collection*****/
    db.createCollection("reg", (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("collection created..");
    })

    //****insert single data ******/
    var dt = { name: "Jinal", email: "jinal@gmail.com" };
    db.collection("reg").insertOne(dt, (err, resp) => {
        if (err) {
            console.log(err);
            return
        }
        console.log(resp);
    })

    //**********insert many******** */
    var dt1 = { name: "himani", email: "himani@gmail.com", phno: 989685746352 }
    var dt2 = { name: "Vaibhav", email: "vaibhav@gmail.com", phno: 8963524152 }

    db.collection("reg").insertMany([dt1, dt2], (err, resp) => {
        if (err) {
            console.log(err);
            return
        }
        console.log(resp);
    })


    db.collection("reg").find({ name: "Jinal" }).toArray((err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
    })

    db.collection("reg").find({}, { projection: { name: 0, _id: 0 } }).toArray((err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
    })

    db.collection("reg").find({ name: /^V/ }).toArray((err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
    })

    db.collection("reg").find({}).sort({ name: -1 }).toArray((err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
    })

    


})
