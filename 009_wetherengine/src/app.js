const express = require("express")
const app = express();
const path = require("path")
const hbs = require("hbs")
const PORT = 3000;

const viewPath = path.join(__dirname, "../templetes/views")
const partialPath = path.join(__dirname, "../templetes/partials")
const publicPath = path.join(__dirname, "../public")

app.set("view engine", "hbs")
app.set("views", viewPath)
hbs.registerPartials(partialPath)
app.use(express.static(publicPath))

app.get("/", (req, resp) => {
    resp.render("home")
})

app.get("/weather", (req, resp) => {
    resp.render("weather")
})

app.listen(PORT, (req, resp) => {
    console.log("Server is running on port : " + PORT);
})


