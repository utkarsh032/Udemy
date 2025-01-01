import { getCourse, getAllCourses } from "../controllers/course.controller.js";
import { checkForToken } from "../controllers/user.controller.js";
import { Router } from "express";

const courseRouter = Router();

courseRouter.get("/get-courses", checkForToken, getAllCourses);

courseRouter.get("/get-course/:courseId", checkForToken, getCourse);

export { courseRouter };