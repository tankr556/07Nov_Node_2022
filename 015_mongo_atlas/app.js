const mongoose = require("mongoose")
const express = require("express")
const app = express()
const PORT = 9000;
app.use(express.json())
const dburl = "mongodb+srv://rakesh:rakesh@cluster0.i1xmtxr.mongodb.net/mydb?retryWrites=true&w=majority"

mongoose.connect(dburl).then(() => {
    console.log("db connected");
}).catch(err => {
    console.log(err);
})
const userrouter = require("./router/userrouter")
const categoryrouter = require("./router/categoryrouter")
const productrouter = require("./router/productrouter")
const cartrouter = require("./router/cartrouter")
app.use("/users", userrouter)
app.use("/category", categoryrouter)
app.use("/products", productrouter)
app.use("/carts", cartrouter)


app.listen(PORT, () => {
    console.log("Server running on port : " + PORT);
})

//for npm i bcryptjs