const router = require("express").Router();
const marketController = require("../../controllers/marketController");

router.route("/")
.get(marketController.findAll)
.post(marketController.create);

router.route("/:id")
.get(marketController.findById);

module.exports = router;