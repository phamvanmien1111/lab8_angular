import mongoose ,{Schema} from "mongoose";
import { IContact } from "../interface/IContact";

const UserSchema:Schema = new Schema<IContact>({
    firstName:{type: String, required: true},
    lastName:{type:String , required: true},
    email: { type: String, required: true },
    message: { type: String, required: true },
    purpose: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})
const Contact =  mongoose.model<IContact>("contacts", UserSchema);

export default Contact;
