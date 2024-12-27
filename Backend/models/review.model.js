import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
  courseId: {
    type: Schema.Types.ObjectId,
    ref: "course",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  rating: Number,
  feedback: String
});

const Review = new model("review", reviewSchema);

export { Review };
