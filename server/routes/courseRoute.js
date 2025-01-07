const router = require("express").Router();
const { getAllCourses } = require("../controllers/courseController");

// get all courses
router.get("/", getAllCourses);

module.exports = router;
