const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const UserController = require("./Controllers/UserController")
const SellerController = require("./Controllers/SellerController")

dotenv.config()

app.use(express.json());
app.use(cors());
app.use("/user", UserController);
app.use("/seller", SellerController);

const connect = () => mongoose.connect(process.env.MONGODB_URL)

app.listen(process.env.PORT, async () => {
    await connect()
    console.log('listening on port ' + process.env.PORT)
})
