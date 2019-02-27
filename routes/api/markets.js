const router = require("express").Router();
const marketController = require("../../controllers/marketController");

router.route("/searchresults")
.get(marketController.findAll)
.post(marketController.create);

module.exports = router;