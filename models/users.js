const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const users = new Schema({
    name :{type : String,required : true},
    // userName :{type : String ,required : true},
    password :{type : String,required : true},
    email :{type : String,required : true},
    date: {
        type: Date,
        default: Date.now
      },
    // phoneNumber :{type : Number}
});

const Users = mongoose.model("Users", users);

module.exports = Users;