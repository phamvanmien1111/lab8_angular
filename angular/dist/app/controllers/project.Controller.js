var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from "mongoose";
import Project from "../models/project.model";
export const project = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield Project.find().lean();
        return projects;
    }
    catch (e) {
        console.error(e);
        return [];
    }
});
export const getProjectById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "ID không hợp lệ" });
        }
        const project = yield Project.findById(id).lean();
        if (!project)
            return res.status(404).json({ message: "không tìm thấy project" });
        return res.render("projectDetail", { project, showHeaderFooter: true });
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ message: "không tìm thấy project" });
    }
});
