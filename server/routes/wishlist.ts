const express = require("express");
const WishListRouter = express.Router();

import { addToWishlist, getWishLists } from "../controllers/wishlist";

WishListRouter.get("/", getWishLists).post("/", addToWishlist);

export default WishListRouter;
