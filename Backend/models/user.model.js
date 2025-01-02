import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: String,
  name: String,
  password: String,
  avatar: String,
  role: {
    type: String,
    enum: ["student", "instructor"],
    default: "student",
  },
  cartItems: {
    type: [Schema.Types.ObjectId],
    ref: "course",
    default: [],
  },
  wishList: {
    type: [Schema.Types.ObjectId],
    ref: "course",
    default: [],
  },
  enrolledCourse: {
    type: [Schema.Types.ObjectId],
    ref: "course",
    default: [],
  },
  createdCourse: {
    type: [Schema.Types.ObjectId],
    ref: "course",
    default: [],
  },
});

const User = new model("user", userSchema);

export { User };