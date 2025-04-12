import mongoose from 'mongoose';
import dotenv from "dotenv";

export const ConnectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("kết nối thành công");
    }
    catch(error){
        console.error("lỗi kết nối mongo compass", error);
        process.exit(1);
    }
}