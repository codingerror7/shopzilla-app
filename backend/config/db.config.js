import mongoose from "mongoose";
import dotenv from "dotenv";
const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected..")
    } catch (error) {
        console.log("error connecting database..",{error});
    }
}
export default connectDB;