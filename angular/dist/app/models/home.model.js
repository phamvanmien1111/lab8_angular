import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    bio: { type: String, required: true },
    avatar: { type: String, required: true },
    socials: {
        github: { type: String, required: true },
        facebook: { type: String, required: true },
        linkedin: { type: String, required: true }
    },
    skills: { type: [String], required: true },
    createdAt: { type: Date, default: Date.now },
    student: { type: String, required: true },
    about: { type: String, required: true }
});
const userModel = mongoose.model("users", UserSchema);
export default userModel;
