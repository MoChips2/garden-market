const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    console.log("inside findAll")
    db.Market
      .find()
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // findById: function (req, res) {
  //   db.Market
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  create: function (req, res) {
    console.log("inside create")
    db.Market
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    console.log("inside findById" + req.params.id);
    db.Market
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    console.log("inside update, id: " + req.params.id);
    console.log(req.body);
    db.Market
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  addMessage: function (req, res) {
    console.log("marketController line: 42")
    console.log(req.body.messages)
    console.log(req.body.sender)
    db.Market
      .updateOne({ _id: req.params.id }, { $push: { messages: { $each: [ {message: req.body.messages, sender: req.body.sender, keyID: req.body.keyID} ], $position: 0 }}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addJoin: function (req, res) {
    console.log("marketController addJoin ")
    console.log(req.body.name)
    console.log(req.body.email)
    console.log(req.body.message)
    db.Market
    .updateOne({ _id: req.params.id }, { $push: { joinMessages: { $each: [ {name: req.body.name, email: req.body.email, message: req.body.message, keyID: req.body.keyID } ], $position: 0 }}})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findMessage: function (req, res) {
    console.log(req.params)
    db.Market
      .find()
      .sort({date: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findPosts: function (req, res) {
    console.log("line 70 in marketcontroller")
    console.log(req.params.id)
    db.Market
    .findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err))
  }
}