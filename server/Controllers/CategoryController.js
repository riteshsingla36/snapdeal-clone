const Category = require("../Models/CategoryModel")

const router = require("express").Router()


router.get('/', async (req, res) => {
    try {

        const categories = await Category.find()
        return res.json({ status: true, categories: categories })
    }
    catch (err) {
        return res.json({ status: false, msg: err.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const category = await Category.findById(req.params.id)
        return res.json({ status: true, category: category })
    }
    catch (err) {
        return res.json({ status: false, msg: err.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const category = await Category.create(req.body)
        return res.json({ status: true, category: category })
    }
    catch (err) {
        return res.json({ status: false, msg: err.message })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const category = await Category.findByIdandupdate(req.params.id, req.body, { new: true })
        return res.json({ status: true, category: category })
    }
    catch (err) {
        return res.json({ status: false, msg: err.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id)
        return res.json({ status: true })
    }
    catch (err) {
        return res.json({ status: false, msg: err.message })
    }
})



module.exports = router