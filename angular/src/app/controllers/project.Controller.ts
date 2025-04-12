import {Request,Response} from "express"
import mongoose from "mongoose";
import Project  from "../models/project.model"
export const project = async () => { 
    try {
        const projects = await Project.find().lean();
        return projects;
    } catch (e) {
        console.error(e);
        return [];
    }
};
export const getProjectById = async (req: Request, res: Response)=>{
    try{
        const {id } = req.params;
          if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "ID không hợp lệ" });
        }
        const project  = await Project.findById(id).lean();
        if(!project) return res.status(404).json({message: "không tìm thấy project"})
             return res.render("projectDetail", { project ,showHeaderFooter:true });
    }
    catch(e){
        console.error(e)
        res.status(500).json({message: "không tìm thấy project"})
    
    }
}
