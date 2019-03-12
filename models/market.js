const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Users = require("./users.js")


const marketSchema = new Schema({
    marketName: String,
    address: String,
    city: String,
    state: String,
    zip: Number,
    about: String,
    organizer : String, // for now...
    img: String,
    startMonth: String,
    endMonth: String,
    days: Array,
    startTime: String,
    endTime: String,
    members: String,
    // members : [Users],
    products: Array
});

const Market = mongoose.model("Market", marketSchema);

module.exports = Market;