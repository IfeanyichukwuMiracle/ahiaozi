const router = require("express").Router();

// to add a product to wishlist - only logged in users can add products to wishlist
router.post("/add");

// to get a customer's wishlist - anyone can access this route
router.get("/:customerId");

// to remove a course from wishlist - only logged in users can access this route
router.delete("/:courseId");

module.exports = router;
