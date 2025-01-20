import { CourseDescription } from "../models/courseDescription.model.js";
import { CourseContent } from "../models/courseContent.model.js";

const getAllCourses = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.params;

        const user = req.user;

        const purchased = await CourseDescription.find({ _id: user.enrolledCourse });

        const nonPurchased = await CourseDescription.find({ _id: { $nin: user.enrolledCourse } })
            .skip((page - 1) * limit)
            .limit(limit);

        res.status(200).json({
            purchased,
            nonPurchased
        });

    } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
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
        console.log(error.message);
        res.status(400).json({ message: error.message });
    }
}

export { getAllCourses, getCourse };