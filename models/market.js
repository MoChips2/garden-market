const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Users = require("./users.js")


const market = new Schema({
    marketName :{type : String ,required : true},
    address:{type : String,required : true},
    city :{type : String,required : true},
    state: {type : String,required : true},
    zip: {type : Number,required : true},
    about: {type : String,required : true},
    organizer : {Users}, // for now...
    members : [Users],
    roles: [String]
});

const Market = mongoose.model("Market", market);

module.exports = Market;