const express = require("express")
const app = express();
const path = require("path")
const PORT = 3000;

app.get("/", (req, resp) => {
    // resp.send("Home calling")
    // resp.json({
    //     "name": "tops"
    // })
    resp.sendFile(path.join(__dirname, "home.html"))

})
app.get("/about", (req, resp) => {
    // resp.send("about calling")
    resp.sendFile(path.join(__dirname, "about.html"))


})
app.get("*", (resq, resp) => {
    resp.send("404 not fount")

})


app.listen(PORT, () => {
    console.log("server running on port" + PORT);
})