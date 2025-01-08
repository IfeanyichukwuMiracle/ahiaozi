const Course = require("../models/courseModel");
const AppError = require("../utils/AppError");

// get all courses
const getAllCourses = async (req, res, next) => {
  try {
    // exclude certain fields from query string
    const excludedFields = ["limit", "sort", "page"];
    let queryObj = { ...req.query };
    excludedFields.forEach((field) => delete queryObj[field]);
    // check for gt, gte, lt, lte
    const queryStr = JSON.stringify(queryObj).replace(
      /(gt|gte|lt|lte)/,
      (el) => `$${el}`
    );
    queryObj = JSON.parse(queryStr);

    // set default values for req.query.limit and req.query.page
    req.query.limit = +req.query.limit || 10;
    +req.query.page <= 0
      ? (req.query.page = 1)
      : (req.query.page = +req.query.page || 1);
    // count total number of courses
    const totalDocuments = await Course.countDocuments();

    // create query
    let query = Course.find(queryObj);
    // handle sort, limit and page
    if (req.query.sort) {
      const sortStr = req.query.sort.split(",").join(" ");
      query = query.sort(sortStr);
    }
    if (req.query.limit && req.query.page) {
      // calculate offset and add query
      const offset = (req.query.page - 1) * req.query.limit;
      offset < totalDocuments
        ? (query = query.skip(offset).limit(req.query.limit))
        : (query = query);
    }

    const courses = await query.select("-moduleContent").populate("tutor");
    // send response
    return res
      .status(200)
      .json({ status: "success", data: courses, length: courses.length });
  } catch (e) {
    console.log(e);
    return next(new AppError(e.message, 500, "Courses Fetch Error!"));
  }
};

// get a course
const getCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.courseId)
      .select("-moduleContent")
      .populate("tutor");
    if (!course) return next(new AppError("Course not found", 404, "error"));

    return res.status(200).json({ status: "success", data: course });
  } catch (e) {
    console.log(e);
    return next(new AppError(e.message, 500, "Course Fetch Error!"));
  }
};

// add courses
const addCourse = async (req, res, next) => {
  try {
    const course = await Course.create({ ...req.body, tutor: req.user._id });

    // send response
    return res.status(200).json({ status: "success", data: course });
  } catch (e) {
    console.log(e);
    return next(new AppError(e.message, 500, "Course Upload Error"));
  }
};

// update course
const updateCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return next(new AppError("Course not found!", 404, "Error"));
  } catch (e) {
    console.log(e);
    return next(new AppError(e.message, 500, "Course Update Error"));
  }
};

module.exports = { getAllCourses, addCourse, updateCourse, getCourse };
