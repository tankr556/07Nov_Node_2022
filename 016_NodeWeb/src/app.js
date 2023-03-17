const mongoose = require("mongoose")
const express = require("express")
const app = express();
const PORT = 3000;
const path = require("path")
const hbs = require("hbs")
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const dburl = "mongodb+srv://tops:tops@cluster0.t3ni3is.mongodb.net/myweb?retryWrites=true&w=majority"

mongoose.connect(dburl).then(() => {
    console.log("db connected");
}).catch(err => {
    console.log(err
    );
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
const viewPath = path.join(__dirname, "../templetes/views")
const publicpath = path.join(__dirname, "../public")
app.use(express.static(publicpath))
app.set("view engine", "hbs")
app.set("views", viewPath)

const userrouter = require("../router/userrouter")
app.use("/", userrouter)

app.listen(PORT, () => {
    console.log("server running on port : " + PORT);
})