import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


// MONGODB_URI="mongodb+srv://tsantra505:tsantra505@cluster0.gtnjzst.mongodb.net"
const connectDB = async () => {
    try {
        const connectionInstence = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  
        console.log(`\n MongoDB Connected !! DB HOST : ${connectionInstence.connection.host}`);      
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR ",error);        
        process.exit(1)
    }
}

export default connectDB;