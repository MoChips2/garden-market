const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Users = require("./users.js")


const marketSchema = new Schema({
    marketName: String,
    about: String,
    organizer : String, // for now...
    email:String,
    img: String,
    startMonth: String,
    endMonth: String,
    days: [],
    startTime: Date,
    endTime: Date,
    members: [],
    // members : [Users],
    products: [],
    address: {
        street: String,
        city: String,
        state: String,
        zip: Number,
        country: String,
    },
    coords: {
        lat:Number,
        lon:Number,
    },
});

const Market = mongoose.model("Market", marketSchema);

module.exports = Market;