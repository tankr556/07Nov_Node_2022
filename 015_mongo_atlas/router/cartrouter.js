const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const cart = require("../model/cart")
const auth = require("../middleware/auth")


router.post("/", async (req, resp) => {
    try {
        const cat = new cart({
            uid:req.uid,
            pid:req.body.pid,
            qty:req.body.qty
        })
        const result = await cat.save();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/",auth, async (req, resp) => {
    try {
        const result = await cart.aggregate([{ $lookup: { from: 'products', localField: 'pid', foreignField: '_id', as: 'product' } }, { $lookup: { from: 'users', localField: 'uid', foreignField: '_id', as: 'User' } }]);
        console.log(result);
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/:id", async (req, resp) => {
    const _id = req.params.id
    try {
        const result = await cart.findOne({ _id })
        resp.send(result)

    } catch (error) {
        resp.send(error)
    }
})

router.delete("/:id", async (req, resp) => {
    const _id = req.params.id

    try {
        const result = await cart.findByIdAndDelete(_id)
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.put("/:id", async (req, resp) => {
    const _id = req.params.id

    try {
        const result = await cart.findByIdAndUpdate(_id, req.body)
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})
router.get("/user/:id", async (req, resp) => {
    const _id = mongoose.Types.ObjectId(req.params.id)
    console.log(_id);
    try {
        const result = await cart.aggregate([{ $match: { 'uid': _id } }, { $lookup: { from: 'products', localField: 'pid', foreignField: '_id', as: 'product' } }, { $lookup: { from: 'users', localField: 'uid', foreignField: '_id', as: 'User' } }]);
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/users/:id", async (req, resp) => {
    const _id = mongoose.Types.ObjectId(req.params.id)
    console.log(_id);
    try {
        const result = await cart.aggregate([{ $match: { "uid": "63b29136aa04b8637eb37605" } }, { $group: { _id: "$uid", TotalSum: { $sum: "$qty" } } }]);
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})




module.exports = router