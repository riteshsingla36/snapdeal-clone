const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
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
            default: 'user'
        }
    },
    {
        timeStamps: true,
        versionKey: false
    }
)

const User = mongoose.model('User', userSchema)

module.exports = User