import { getCourse, getAllCourses } from "../controllers/course.controller.js";
import { CourseDescription } from "../models/courseDescription.model.js";
import { checkForToken } from "../controllers/user.controller.js";
import { Router } from "express";

const courseRouter = Router();

courseRouter.get("/", async (req, res) => {
    try {
        const courses = await CourseDescription.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

courseRouter.get("/get-courses", checkForToken, getAllCourses);

courseRouter.get("/get-course/:courseId", checkForToken, getCourse);

export { courseRouter };