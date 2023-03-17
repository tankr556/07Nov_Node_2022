const mongoose = require("mongoose")


const cartSchema = new mongoose.Schema({
    pid: {
        type: mongoose.Schema.Types.ObjectId
    },
    uid: {
        type: mongoose.Schema.Types.ObjectId
    },
    qty: {
        type: Number
    }
    

})

module.exports = new mongoose.model("cart", cartSchema)