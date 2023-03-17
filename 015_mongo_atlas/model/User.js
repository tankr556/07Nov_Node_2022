const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const { response } = require("express");

const userSchema = new
    mongoose.Schema({
        username: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        },
        birthdate: {
            type: Date,
            default: new Date().now
        }
    })

userSchema.pre("save", async function () {
    try {
        this.password = await bcrypt.hash(this.password, 10);
        // console.log(password);
    } catch (error) {
        response.send(error)
    }
})


module.exports = new mongoose.model("User", userSchema);