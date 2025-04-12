import mongoose, {Schema} from "mongoose";
import { Iproject } from "../interface/IProject";

const ProjectSchema:Schema = new Schema<Iproject>({
    title:{type: "string",required: true},
    description:{type: "string",required: true},
    techStack:{type: [String], required: true},
    image:{type: "string",required: true},
    link:{type: "string",required: true},
    createdAt:{type: Date, default: Date.now},
    imageproject: { type: [String], required: true }
})
const Project = mongoose.model<Iproject>("project",ProjectSchema)

export default Project;