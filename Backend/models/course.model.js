import { Schema, model } from "mongoose";

const courseSchema = new Schema({
  uploadLink: String,
  title: String,
  thumbnail: String,
  category: String,
  subCategory: String,
  actualPrice: String,
  salePrice: String,
  duration: String,
  notes: [String],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  avgRating: Number,
  reviews: {
    type: [Schema.Types.ObjectId],
    ref: "review",
  },
});

const Course = new model("course", courseSchema);

export { Course };
