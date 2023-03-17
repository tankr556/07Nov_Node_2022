const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    pname: {
        type: String
    },
    price: {
        type: String
    },
    qty: {
        type: String
    },
    catid: {
        type: mongoose.Schema.Types.ObjectId
    }
})
module.exports = new mongoose.model("product", productSchema)