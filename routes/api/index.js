const router = require("express").Router();
const marketRoutes = require("./markets");

router.use("/markets", marketRoutes);


module.exports = router;