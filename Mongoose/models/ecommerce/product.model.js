    
    
import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
    description : {
        type : String,
        required : true,        
    },
    name :{
        type :String,
        required :true,
    },
    productImage :{
        type:String,

    }  ,
    price :{
        type : Number,
        price :0,
    }  ,
    stock :{
        default :0,
        type :Number,
    },
    category :{
        type : mongoose.Schema.Types.ObjectId,
        ref :"category",
        required:true,
    },
    owner :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
    }


},{timestamps:true})

export const product=mongoose.model("product",productSchema)