import { Schema, model } from "mongoose";

// Lesson Schema for Section 
const LessonSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, require: true },
  duration: { type: String, required: true },
  completed: { type: Boolean, default: false },
  resources: { type: Boolean, default: false },
});

// Section Schema for Course Content Schema
const SectionSchema = new Schema({
  sectionTitle: { type: String, required: true },
  progress: { type: String, required: true },
  duration: { type: String, required: true },
  lessons: { type: [LessonSchema], default: [] },
});

const courseSchema = new Schema({
  uploadLink: String,
  title: String,
  description: String,
  thumbnail: String,
  category: String,
  subCategory: String,
  actualPrice: Number,
  salePrice: Number,
  duration: String,
  notes: [String],
  createdBy: {
    type: [Schema.Types.ObjectId],
    ref: "user",
  },
  avgRating: Number,
  reviews: {
    type: [Schema.Types.ObjectId],
    ref: "review",
  },
  courseContent: {
    courseName: String,
    section: { type: [SectionSchema], default: [] }
  }
});

const Course = new model("course", courseSchema);

export { Course };
