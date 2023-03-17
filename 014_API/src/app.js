const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = 9000
const dburl = "mongodb://127.0.0.1:27017/7nov";
app.use(express.json())
mongoose.connect(dburl).then(() => {
    console.log("Db connected !!!!");
}).catch(err => {
    console.log(err);
})

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

const User = new mongoose.model("User", userSchema)

app.post("/users", async (req, resp) => {
    try {
        const user = new User(req.body)
        const data = await user.save();
        resp.send(data)
        
    } catch (error) {
        console.log(error);

    }

})
app.get("/users", async (req, resp) => {
    try {
        const user = await User.find();
        resp.send(user)
    } catch (error) {
        resp.send(error);

    }

})

app.get("/users/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const user = await User.findById(id);
        resp.send(user)
    } catch (error) {
        resp.send(error);

    }

})
app.put("/users/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const data = await User.findByIdAndUpdate(id, req.body);
        resp.send(data)
    } catch (error) {
        resp.send(error);

    }

})
app.delete("/users/:id", async (req, resp) => {
    const id = req.params.id
    try {
        const data = await User.findByIdAndDelete(id);
        resp.send(data)
    } catch (error) {
        resp.send(error);

    }

})



app.listen(PORT, () => {
    console.log("Server running on port:" + PORT);
})