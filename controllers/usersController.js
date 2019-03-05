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
    .findOne(req.body.email)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  
}