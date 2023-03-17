const express = require("express")
const router = express.Router()
const Category = require("../model/Category")
const product = require("../model/product")


router.post("/", async (req, resp) => {
    try {
        const prod = new product(req.body)
        const result = await prod.save();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/", async (req, resp) => {
    try {
        const result = await product.find();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/:id", async (req, resp) => {
    const _id = req.params.id
    try {
        const result = await product.findOne({ _id })
        resp.send(result)

    } catch (error) {
        resp.send(error)
    }
})

router.delete("/:id", async (req, resp) => {
    const _id = req.params.id

    try {
        const result = await product.findByIdAndDelete(_id)
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.put("/:id", async (req, resp) => {
    const _id = req.params.id

    try {
        const result = await product.findByIdAndUpdate(_id, req.body)
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})
router.get("/category/:id", async (req, resp) => {
    const _id = req.params.id
    try {
        const result = await product.find({ catid: _id })
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})


module.exports = router