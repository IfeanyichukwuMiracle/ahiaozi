import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Courses",
    },
    section: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Sections",
    },
    title: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const LessonModel = mongoose.model("lesson", lessonSchema);
