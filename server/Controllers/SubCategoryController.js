const SubCategory = require("../Models/SubCategoryModel")
const router = require("express").Router()


router.get('/', async (req, res) => {
    const obj = {}
    if (req.query.category) {
        obj.category = req.query.category
    }
    try {
        const subCategories = await SubCategory.find(obj)
        return res.json({ status: true, subCategories })
    }
    catch (err) {
        return res.json({ status: false, msg: err.message })
    }
})
router.get("/:id", async (req, res) => {
    try {
        const subCategory = await SubCategory.findById(req.params.id)
        return res.json({ status: true, subCategory })
    }
    catch (err) {
        return res.json({ status: false, msg: err.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const subCategory = await SubCategory.create(req.body)
        return res.json({ status: true, subCategory })
    }
    catch (err) {
        return res.json({ status: false, msg: err.message })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const subCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ status: true, subCategory })
    }
    catch (err) {
        return res.json({ status: false, msg: err.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const subCategory = await SubCategory.findByIdAndDelete(req.params.id)
        return res.json({ status: true })
    }
    catch (err) {
        return res.json({ status: false, msg: err.message })
    }
})

module.exports = router