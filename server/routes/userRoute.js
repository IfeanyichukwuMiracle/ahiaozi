const router = require("express").Router();

//
router.post("/signup");
router.post("/login");

// endpoint for customer to become a tutor
// the role will be updated from "customer to tutor"
router.post("/become-a-tutor");

module.exports = router;
