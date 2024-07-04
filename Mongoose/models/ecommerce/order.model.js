import mongoose from "mongoose";


const orderItemSchema =new mongoose.Schema({
    productId :{
        type : mongoose.Schema.Types.ObjectId,
        ref :"product",
    },
    quantity :{
        type :Number,
        required : true,
    }
})

const orderSchema= new mongoose.Schema({
    orderPrice : {
        type : Number,
        required : true
    },    

    customer :{
        type : mongoose.Schema.Types.ObjectId,
        ref :"user"
    },

    orderItem :{
        type : [orderItemSchema ]
    },
    address :{
        type : String,
        required :true
    },
    status :{
        type : String,
        enum : ["PENDING","CANCELLED","DELIVERED"],
        defaualt : "PENDING"
    }


},{timestamps:true})

export const order=mongoose.model("order",orderSchema)