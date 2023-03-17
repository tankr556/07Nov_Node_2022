const router = require("express").Router()
const User = require("../model/User")
const Category = require("../model/Category")
//const auth = require("../middleware/auth")
const uauth = require("../middleware/userauth")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Product = require("../model/Product")
const Cart = require("../model/Cart")

router.get("/", async (req, resp) => {
    try {
        const cat = await Category.find();
        const prod = await Product.find()
        resp.render("index", { cdata: cat, pdata: prod })
    } catch (error) {

    }
})

router.get("/cart", uauth, async (req, resp) => {
    const uid = req.user._id
    try {
        const cartdata = await Cart.aggregate([{ $match: { uid: uid } },
        { $lookup: { from: 'products', localField: 'pid', foreignField: '_id', as: 'products' } }])
        // console.log(cartdata);
        //resp.render("shoping-cart", { cartd: cartdata })

        let sum = 0;
        for (var i = 0; i < cartdata.length; i++) {
            sum = sum + cartdata[i].total;

        }
        //console.log(sum);
        resp.render("shoping-cart", { cartd: cartdata, carttotal: sum })

    } catch (error) {

    }
    // resp.render("shoping-cart")
})

router.get("/contact", (req, resp) => {
    resp.render("contact")
})

router.get("/shopdetail", (req, resp) => {
    resp.render("shop-details")
})

router.get("/shopgrid", async (req, resp) => {
    try {
        const cat = await Category.find();
        const prod = await Product.find()
        resp.render("shop-grid", { cdata: cat, pdata: prod })
    } catch (error) {

    }
})

router.get("/findByCat", async (req, resp) => {
    const catid = req.query.catid
    try {
        const cat = await Category.find();
        const prod = await Product.find({ cid: catid })
        resp.render("shop-grid", { cdata: cat, pdata: prod })
    } catch (error) {

    }
})

router.get("/loginpage", (req, resp) => {
    resp.render("login")
})
router.get("/reg", (req, resp) => {
    resp.render("registration")
})


router.post("/login", async (req, resp) => {
    try {
        const data = await User.findOne({ email: req.body.email })

        const isvalid = await bcrypt.compare(req.body.password, data.password)
        // console.log(isvalid);
        if (isvalid) {

            const token = await data.generateToken();
            resp.cookie("ujwt", token)
            resp.render("index")
        } else {
            resp.render("login", { msg: "Invalid Email or passwrod" })
        }

    } catch (error) {
        resp.render("login", { msg: "Invalid Email or passwrod" })
    }

})

router.get("/logout", uauth, async (req, resp) => {
    try {
        const user = req.user;
        const token = req.token

        user.Tokens = user.Tokens.filter(ele => {
            return ele.token != token
        })

        await user.save();
        resp.clearCookie("ujwt");
        resp.render("index")
    } catch (error) {
        console.log(error);
    }
})





router.post("/userreg", async (req, resp) => {
    try {
        const user = new User(req.body);
        await user.save();
        resp.render("registration", { msg: "Registration success !!!" })
    } catch (error) {
        console.log(error);
    }
})

//**************************cart******************************/

router.get("/addtocart", uauth, async (req, resp) => {
    const pid = req.query.pid
    //console.log(pid);
    const uid = req.user._id
    //console.log(uid);
    try {
        const allCartProduct = await Cart.find({ uid: uid })
        const productdata = await Product.findOne({ _id: pid });
        const duplicate = allCartProduct.find(ele => {
            return ele.pid == pid
        })
        if (duplicate) {
            resp.send("Product alredy exist in cart !!!")

        }
        else {
            const cart = new Cart({
                pid: pid,
                uid: uid,
                total: productdata.price
            })

            await cart.save();
            resp.send("product added into cart")
        }
    } catch (error) {
        console.log(error);
    }
})

router.get("/deletetocart", uauth, async (req, resp) => {
    try {
        const _id = req.query.cid;
        await Cart.findByIdAndDelete(_id)
        resp.redirect("cart")
    } catch (error) {
        console.log(error);
    }
})

router.get("/changeCartQty", uauth, async (req, resp) => {
    try {
        const cartid = req.query.cartid;
        const cartProduct = await Cart.findOne({ _id: cartid })
        const productdata = await Product.findOne({ _id: cartProduct.pid })
        const newqty = Number(cartProduct.qty) + Number(req.query.qty)
        const newtotal = newqty * productdata.price;

        if (newqty < 1 || newqty > productdata.qty) {
            return;
        }


        // console.log(newtotal);
        const updatedata = await Cart.findByIdAndUpdate(cartid, { qty: newqty, total: newtotal })
        resp.send("ok")
    } catch (error) {
        console.log(error);
    }
})

const Razorpay = require('razorpay');
const Order = require("../model/Order")
router.get("/payment", (req, resp) => {

    const amt = Number(req.query.amt);
    console.log(amt);
    var instance = new Razorpay({ key_id: 'rzp_test_WOONFY9u511Byr', key_secret: 't9ROVnSqZbzNZr59d3KLWzJO' })

    var options = {
        amount: amt * 100,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
    };
    instance.orders.create(options, function (err, order) {
        console.log(order);
        // resp.send(order);

    });

})

var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tankrakesh44@gmail.com',
        pass: 'utvpcyoygfiliepi'
    }
});

router.get("/order", uauth, async (req, resp) => {
    const pid = req.query.pid;
    console.log(pid);
    const user = req.user
    const cartProduct = await Cart.find({ uid: user._id })

    var prod = [];
    for (var i = 0; i < cartProduct.length; i++) {
        prod[i] = {
            pid: cartProduct[i].pid,
            qty: cartProduct[i].qty
        }
    }
    // console.log(prod);
    try {
        const or = new Order({
            pid: pid,
            uid: user._id,
            product: prod
        })
        const orderdata = await or.save()

        var row = "";
        for (var i = 0; i < prod.length; i++) {

            const product = await Product.findOne({ _id: prod[i].pid })
            row = row + "<span>" + product.pname + " " + product.price + " " + prod[i].qty + "</span><br>"
        }
        console.log(row);


        var msg = {
            from: 'tankrakesh44@gmail.com',
            to: user.email,
            subject: 'Order conformation',
            html: "<h1>Eshop</h1>payment id :<span>" + pid + "</span><br><span>" + orderdata._id + "</span><br><span>" + user.fname + " " + user.lname + "<br>Phno:" + user.phno + "</span><br>" + row
        };

        transporter.sendMail(msg, (err, success) => {
            if (err) {
                console.log(err);
                return
            }
            resp.send("Your order confirmed")

        })
    } catch (error) {

    }
})


module.exports = router