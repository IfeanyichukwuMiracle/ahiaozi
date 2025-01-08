const router = require("express").Router();
const {
  getAllCourses,
  addCourse,
  getCourse,
} = require("../controllers/courseController");
const {
  authenticate,
  authorizeTutor,
} = require("../middleware/authMiddleware");

// get all courses
router.get("/", getAllCourses);

// get single course
router.get("/:courseId", getCourse);

// add course
router.use(authenticate);
router.use(authorizeTutor);
router.post("/add", addCourse);

module.exports = router;
