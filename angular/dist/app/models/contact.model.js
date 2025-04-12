import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    purpose: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
const Contact = mongoose.model("contacts", UserSchema);
export default Contact;
