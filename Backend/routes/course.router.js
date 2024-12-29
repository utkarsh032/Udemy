import { getAllCourses } from "../controllers/course.controller.js";
import { Router } from "express";

const courseRouter = Router();

courseRouter.get("/get-courses", getAllCourses);

export { courseRouter };