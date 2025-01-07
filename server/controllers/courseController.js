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
  } catch (e) {
    console.log(e);
    return next(new AppError(e.message, 500, "Courses Fetch Error!"));
  }
};

module.exports = { getAllCourses };
