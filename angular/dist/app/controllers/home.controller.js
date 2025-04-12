var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import userModel from "../models/home.model";
import { project } from "./project.Controller";
export const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel.findOne().lean();
        const projects = yield project();
        res.json({ user, projects });
        // res.render("home",{showHeaderFooter:true , projects, user});
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ message: "không tìm thấy home" });
    }
});
