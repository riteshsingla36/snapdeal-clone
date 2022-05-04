const mongoose = require('mongoose');

const categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }
    },
    {
        timeStamps: true,
        versionKey: false,
    }
)

const Category = mongoose.model('Category', categorySchema)

module.exports = Category