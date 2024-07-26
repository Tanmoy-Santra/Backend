//server
//db.js


import mongoose from "mongoose";

const Connection = async() =>{
    const URL = `mongodb+srv://tanmoysantra911:etO5ka9B5Mrffli6@cluster0.s9qcuph.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try{
        await mongoose.connect(URL)
        console.log("DB Connected")
    }catch(error){
        console.log("Error While Connecting Database", error)
    }
}

export default Connection
