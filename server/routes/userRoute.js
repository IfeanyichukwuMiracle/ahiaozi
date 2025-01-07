const router = require("express").Router();
const { signup, login } = require("../controllers/userController");

// signup
router.post("/signup", signup);
// login
router.post("/login", login);

module.exports = router;
