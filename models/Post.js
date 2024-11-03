const { text } = require("express")
const mongoose=require("mongoose")

const postSchema= new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    message:{
        type: String,
        required: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
}

)

module.exports=mongoose.model("Post",postSchema)