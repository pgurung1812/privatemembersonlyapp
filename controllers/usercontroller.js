
const user= require("../models/User")
const post= require("../models/Post")


module.exports={
 addMembership: async(request,response)=>{
    await user.findOneAndUpdate({userName:request.user},{member:"true"})
    const userObj= await user.findById({_id:request.user})
    const userName= userObj.userName

    const posts=await post.find().lean()
    const authors=[]
    for(let i=0;i<posts.length;i++){
        const authorObj= await user.findById({_id:posts[i].user})
        authors[i]= authorObj.userName
    }
    response.render("member",{posts:posts,user:userName,authors:authors})

 }
}