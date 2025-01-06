const router = require("express").Router();

// to get all courses
router.get("/");

// to get a single course
router.post("/:courseId");

module.exports = router;
