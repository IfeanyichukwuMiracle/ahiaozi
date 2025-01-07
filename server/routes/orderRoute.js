const router = require("express").Router();
const { placeOrder, getOrders } = require("../controllers/orderController");

// place/create order -> before order is placed, check query string for affiliate Code
router.post("/place", placeOrder);

// get a customer's order -> for only logged in users
router.get("/", getOrders);

module.exports = router;
