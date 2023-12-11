const mongoose = require("mongoose")
const mongoURL = "mongodb://localhost:27017"

const ConnectToMongo = () =>
{
    mongoose.connect(mongoURL)
    console.log("connected to mongodb")
}
module.exports = ConnectToMongo;