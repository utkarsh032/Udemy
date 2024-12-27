import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: String,
  name: String,
  password: String,
  avatar: String,
  role: {
    type: String,
    enum: ["student", "instructor"],
  },
  enrolledCourse: {
    type: [Schema.Types.ObjectId],
    ref: "course",
  },
  createdCourse: {
    type: [Schema.Types.ObjectId],
    ref: "course",
  },
});

const User = new model("user", userSchema);

export { User };