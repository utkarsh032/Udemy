import { CourseDescription } from "../models/courseDescription.model.js";
import { CourseContent } from "../models/courseContent.model.js";

const getAllCourses = async (req, res) => {
    try {
        const courses = await CourseDescription.find();

        res.status(200).json(courses);
    } catch (error) {
        res.status(400).json({message:"Something went wrong"})
    }
}

export { getAllCourses };