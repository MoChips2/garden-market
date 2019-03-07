const router = require("express").Router();
const marketRoutes = require("./markets");
const usersRoutes = require("./users");

router.use("/markets", marketRoutes);
router.use("/users", usersRoutes);

module.exports = router;