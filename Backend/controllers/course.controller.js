import { Course } from "../models/course.model.js";

const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();

        res.status(200).json(courses);
    } catch (error) {
        res.status(400).json({message:"Something went wrong"})
    }
}

export { getAllCourses };