const mongoose = require('mongoose');

const sellerSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        image: {
            type: String,
            default: "https://pixlok.com/wp-content/uploads/2021/03/default-user-profile-picture.jpg",
            required: true
        },
        role: {
            type: String,
            default: 'seller'
        },
        gst: {
            type: String,
            required: true
        },
        pan: {
            type: String,
            required: true
        }
    },
    {
        timeStamps: true,
        versionKey: false
    }
)

const Seller = mongoose.model('Seller', sellerSchema)

module.exports = Seller