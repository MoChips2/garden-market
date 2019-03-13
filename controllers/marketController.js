const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    console.log("inside findAll")
    db.Market
      // .find({marketName: "asdfad"})
      .find()
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Market
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
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
    console.log(req.body)
    db.Market
      .update({ _id: req.params.id }, { $push: { messages: {message: req.body.messages, sender: req.body.sender }}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findMessage: function (req, res) {
    console.log(req.params)
    db.Market.messages
      .find()
      .sort({date: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
}