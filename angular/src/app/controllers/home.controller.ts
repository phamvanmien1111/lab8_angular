import {Request,Response} from "express"
import userModel from "../models/home.model"
import {project} from "./project.Controller"

export const index = async (req:Request,res:Response)=>{
    try{
        const user = await userModel.findOne().lean();
        const projects = await project();
        res.json({user,projects});
        // res.render("home",{showHeaderFooter:true , projects, user});
    }
    catch(e){
        console.error(e)
        res.status(500).json({message: "không tìm thấy home"})
    }
}