const router = require("express").Router();
const marketController = require("../../controllers/marketController");

// Matches with "/api/books"
router.route("/")
  .get(marketController.findAll)
  .post(marketController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(marketController.findById)
  .put(marketController.update)
  .post(marketController.addMessage)
  .get(marketController.findMessage)
  
router.route("/join/:id")
  .post(marketController.addJoin)
module.exports = router;
