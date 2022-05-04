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


app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT)
})
