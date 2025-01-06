const router = require("express").Router();

// to buy a course/place an order - only loggedIn users can place order/buy courses
router.post("/place-order");

// to get all courses for a loggedIn user
router.get("/");

// to get a single course for a loggedIn user
router.get("/:courseId");

module.exports = router;
