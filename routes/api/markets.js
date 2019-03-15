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
  console.log("step 3")

  // .get(marketController.findMessage)
  
router.route("/join/:id")
  .post(marketController.addJoin)

// router.route("/messages/:id")
//   .get(marketController.findMessage)

module.exports = router;
