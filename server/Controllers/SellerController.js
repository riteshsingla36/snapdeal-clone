const Seller = require('../Models/sellerModel')

const jwt = require('jsonwebtoken')
const router = require('express').Router()

router.post('/signup', async (req, res) => {
    const { name, password, email } = req.body

    if (name == "") {
        return res.json({ status: false, msg: "Please enter your name" })
    }
    if (email == "") {
        return res.json({ status: false, msg: "Please enter your email address" })
    }
    if (password.length < 8) {
        return res.json({ status: false, msg: "Please enter valid password length cannot be less than 8 characters" })
    }
    try {
        const emailCheck = await Seller.findOne({ email: email })
        if (emailCheck) {
            return res.json({ status: false, msg: "Email already exists" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        if (!hashedPassword) {
            return res.json({ status: false, msg: "Error hashing your password" })
        }

        const seller = await Seller.create({ name, email, password: hashedPassword })
        jwt.sign({ seller }, process.env.JWT_SECRET_KEY, { expiresIn: "24h" }, (err, token) => {
            if (err) {
                return res.json({ status: false, msg: err.message })
            }
            return res.json({ status: true, seller: { _id: seller._id, name: seller.name, email: seller.email, image: seller.image }, token: token })
        })
    }
    catch (err) {
        return res.json({ status: false, msg: err.message })
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const seller = await Seller.findOne({ email })
        if (!seller) {
            return res.json({ status: false, msg: "Email or password is incorrect" })
        }
        const passwordCheck = bcrypt.compare(password, seller.password)
        if (!passwordCheck) {
            return res.json({ status: false, msg: "Email or password is incorrect" })
        }
        jwt.sign({ seller }, process.env.JWT_SECRET_KEY, { expiresIn: "24h" }, (err, token) => {
            if (err) {
                return res.json({ status: false, msg: err.message })
            }
            return res.json({ status: true, seller: { _id: seller._id, name: seller.name, email: seller.email, image: seller.image }, token: token })
        })
    }
    catch (err) {
        return res.json({ status: false, msg: err.message })
    }
})

module.exports = router