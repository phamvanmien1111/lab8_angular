import mongoose, { Schema } from "mongoose";
const ProjectSchema = new Schema({
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    techStack: { type: [String], required: true },
    image: { type: "string", required: true },
    link: { type: "string", required: true },
    createdAt: { type: Date, default: Date.now },
    imageproject: { type: [String], required: true }
});
const Project = mongoose.model("project", ProjectSchema);
export default Project;
