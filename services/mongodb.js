const mongoose = require('mongoose')
require('dotenv').config()

const connectToMongoDB = () => {
    mongoose.connect(process.env.LOCAL_DB)

    mongoose.connection.on("connected", () => {
        console.log("Connected to MongoDB Successfully");
    })

    mongoose.connection.on("error", (err) => {
        console.log("An error occurred while connecting to MongoDB");
        console.log(err);
    });
}

module.exports = { connectToMongoDB }
