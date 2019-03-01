const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/gardenmarket",
  { useNewUrlParser: true }
);

const userSeeds = [
    {
        userId :"11",
        userName :"joeyA",
        password :"reactor",
        email :"joey@friends.com",
        phoneNumber :"1234567890"
    },
    {
        userId :"2",
        userName :"rossG",
        password :"reactor",
        email :"ross@friends.com",
        phoneNumber :"1234567890"
    },
    {
        userId :"3",
        userName :"monicaG",
        password :"reactor",
        email :"monica@friends.com",
        phoneNumber :"1234567890"
    },
    {
        userId :"4",
        userName :"chandlerB",
        password :"reactor",
        email :"chandler@friends.com",
        phoneNumber :"1234567890"
    },
    {
        userId :"5",
        userName :"rossG",
        password :"reactor",
        email :"ross@friends.com",
        phoneNumber :"1234567890"
    },
    {
        userId :"6",
        userName :"feebiB",
        password :"reactor",
        email :"feebi@friends.com",
        phoneNumber :"1234567890"
    }
  
];

// db.Users
//   .remove({})
//   .then(() => db.Users.collection.insertMany(userSeeds))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

db.Users
.find({userId:11})
// .then(console.log(res));
.then(data => {
        console.log(data)})
.catch(err => res.status(422).json(err));