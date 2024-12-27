import { Schema, model } from "mongoose";

const courseSchema = new Schema({
    uploadLink: URL,
    title: String,
    thumbnail: URL,
    category: String,
    notes: URL,
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    avgRating: Number,
    reviews: {
        type: Schema.Types.ObjectId,
        ref: "review"
    }
});

const Course = new model("course", courseSchema);

export { Course };
