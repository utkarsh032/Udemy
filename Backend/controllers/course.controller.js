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

const getCourse = async (req, res) => {
    try {
        const { courseId } = req.params;
        const user = req.user;

        if (user.enrolledCourse.includes(courseId)) {
            const course = await CourseDescription.findOne({
              _id: courseId,
            }).populate("courseContent");
            
            return res.status(200).json({ course });
        } 

        const course = await CourseDescription.findOne({ _id: courseId }).populate("createdBy").populate("reviews");

        res.status(200).json({ course });

    } catch (error) {
        res.status(400).json({message: "Invalid Course Id"})
    }
}

export { getAllCourses, getCourse };