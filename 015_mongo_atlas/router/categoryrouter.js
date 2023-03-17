const express = require("express")
const router = express.Router()
const Category = require("../model/Category")

router.post("/", async (req, resp) => {
    try {
        const cat = new Category(req.body)
        const result = await cat.save();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/", async (req, resp) => {
    try {
        const result = await Category.find();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/:id", async (req, resp) => {
    const _id = req.params.id
    try {
        const result = await Category.findOne({ _id })
        resp.send(result)

    } catch (error) {
        resp.send(error)
    }
})

router.delete("/:id", async (req, resp) => {
    const _id = req.params.id

    try {
        const result = await Category.findByIdAndDelete(_id)
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.put("/:id", async (req, resp) => {
    const _id = req.params.id

    try {
        const result = await Category.findByIdAndUpdate(_id, req.body)
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

module.exports = router