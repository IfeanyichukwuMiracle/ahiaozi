import axios from "axios";
import backend_url from "./backend-url";

// get courses
export async function getCourses() {
  return await axios.get(`${backend_url}/course?limit=6&page=1`);
}
// get a course
export async function getCourseById(courseId) {
  return await axios.get(`${backend_url}/course/${courseId}`);
}
