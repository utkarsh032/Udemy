import { Schema, model } from "mongoose";

const LessonSchema = new Schema({
  title: String,
  url: String,
  duration: String,
  notes: [String],
  completed: {
    type: Boolean,
    default: false,
  },
});

const SectionSchema = new Schema({
    sectionTitle: String,
    progress: String,
    duration: String,
    lessons: {
        type: [LessonSchema],
        default: []
    },
});

const courseContentSchema = new Schema({
  courseName: String,
  sections: {
    type: [SectionSchema],
    default: []
  },
});

const CourseContent = new model("courseContent", courseContentSchema);

export { CourseContent };
