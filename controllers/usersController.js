const db = require("../models");

module.exports = {
  findById: function(req, res) {
    db.Users
    .findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Users
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req,res){
    db.Users
    .findOne(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  pushAdminMessage: function(req, res) {
    db.Users
    .updateOne({name: "admin"}, { $push: { messages: { $each: [ {name: req.body.name, email: req.body.email, message: req.body.message, keyID: req.body.keyID } ], $position: 0 }}})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
  
}