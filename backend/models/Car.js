const { default: mongoose } = require("mongoose");

const mongoose = require(mongoose)


const carSchema = new mongoose.Schema({

    name : String, brand : String, pricePerDay: Number,  available: Boolean, location: String
})

module.exports = mongoose.model('Car', carSchema);