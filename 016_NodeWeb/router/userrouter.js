const router = require("express").Router()
const User = require("../model/User")
const bcrypt = require("bcryptjs")  
const auth = require("../middleware/auth")
const fs = require("fs")
router.get("/", (req, resp) => {
    resp.render("index")
})
const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/profile')
    },
    filename: function (req, file, cb) {

        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
})

const upload = multer({ storage: storage })

router.post("/adduser", upload.single("file"), async (req, resp) => {



    try {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            img: req.file.filename
        })
        await user.save();
        resp.render("index", { "msg": "Registration successfully done !!!" })
    } catch (error) {

    }
})


router.get("/display", auth, async (req, resp) => {
    try {
        const users = await User.find(); 
            resp.render("display", { data: users })
    } catch (error) {
        console.log(error);
    }
})

router.get("/delete", async (req, resp) => {
    const _id = req.query.did
    try {
        const data = await User.findByIdAndDelete(_id);


        fs.unlinkSync(path.join(__dirname, `../public/profile/${data.img}`));

        resp.redirect("display")
    } catch (error) {
        console.log(error);
    }
})

router.get("/update", async (req, resp) => {
    const _id = req.query.uid
    try {
        const user = await User.findOne({ _id: _id });
        resp.render("update", { data: user })
    } catch (error) {
        console.log(error);
    }
})

router.post("/updateUser", upload.single("file"), async (req, resp) => {


    try {
        console.log(req.file.filename);
        const user = await User.findByIdAndUpdate(req.body.id, {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            img: req.file.filename
        });
        fs.unlinkSync(path.join(__dirname, `../public/profile/${data.img}`))
        resp.redirect("display")
    } catch (error) {
        const user = await User.findByIdAndUpdate(req.body.id, {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        resp.redirect("display")
    }
})

router.get("/loginpage", (req, resp) => {
    resp.render("login")
})

router.post("/login", async (req, resp) => {

    try {
        const user = await User.findOne({ email: req.body.email })

        const isvalid = await bcrypt.compare(req.body.password, user.password)

        if (isvalid) {


            const token = await user.generateToken();
            resp.cookie("jwt", token)
            resp.redirect("display")
        }
        else {
            resp.render("login", { msg: "Invalid email or password" })
        }

    } catch (error) {
        resp.render("login", { msg: "Invalid email or password" })
    }


})

router.get("/logout", auth, async (req, resp) => {
    try {

        const user = req.user;
        const token = req.token

        user.Tokens = user.Tokens.filter(ele => {
            return ele.token != token
        })


        await user.save();
        resp.clearCookie("jwt");
        resp.render("login")
    } catch (error) {
        console.log(error);
    }
})

router.get("/logoutall", auth, async (req, resp) => {
    try {

        const user = req.user;
        const token = req.token

        user.Tokens = [];


        await user.save();
        resp.clearCookie("jwt");
        resp.render("login")
    } catch (error) {
        console.log(error);
    }
})




module.exports = router
