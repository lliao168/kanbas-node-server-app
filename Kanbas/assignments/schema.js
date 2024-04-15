import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({
    _id: String,
    title: { type: String, required: true, unique: true },
    course: { type: String, required: true },
    category: {
        type: String,
        enum: ["ASSIGNMENTS", "QUIZZES", "EXAM", "PROJECT"],
        default: "ASSIGNMENTS",},
    description: String,
    points: Number,
    dueDate: Date,
    availableFromDate: Date,
    availableUntilDate: Date,
  },
  { collection: "assignments" });
export default assignmentSchema;

