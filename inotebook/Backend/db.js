const mongoose = require('mongoose');


const mongoURI = "mongodb+srv://simariavedant:vedant%402003@cluster0.zdhjfvj.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = ()=> {
    mongoose.connect(mongoURI).then(() => {
        console.log("Connected To Mongo Succefuly")
    })

}
module.exports = connectToMongo;