

const post= require("../models/Post")
const user= require("../models/User")
module.exports={

    getPost: async (request,response)=>{
        try{
          const posts=await post.find().lean()
          const userObj= await user.findById({_id:request.user})
          const userName= userObj.userName
          response.render("post.ejs",{posts:posts, user:userName})

        }
        catch(err){
           console.log(err)
        }

    },
    addPost: async(request,response)=>{
      try{
        await post.create({
            title:request.body.title,
            message:request.body.message,
            user: request.user
        })
        console.log("added a message")
        response.redirect("/profile/")

      }
      catch(err){
        console.log(err)

      }
    },
    getPostForMember: async(request,response)=>{
      try{
        const posts= await post.find().lean()
        const userObj= await user.findById({_id:request.user})
        const userName= userObj.userName
        const authors=[]
        for(let i=0;i<posts.length;i++){
        const authorObj= await user.findById({_id:posts[i].user})
        authors[i]= authorObj.userName
    }
      if(userObj.isAdmin){
       return response.render("admin",{posts:posts,user:userName,authors:authors})
      }
        response.render("member",{posts:posts,user:userName, authors:authors})
      }
      catch(err){
        console.log(err)

      }
        

    },
    getAdminPage: async(request,response)=>{

      try{
        const posts= await post.find().lean()
        const userObj= await user.findById({_id:request.user})
        const userName= userObj.userName
        response.render("admin",{posts:posts,user:userName})
      }
      catch(err){
        console.log(err)
      }

    },
    deletePost: async(request,response)=>{
      try{
         await post.findByIdAndDelete({_id:request.params.id})
         console.log("Post is deleted")
         response.redirect("/profile/member")
      }
      catch(err){
        console.log(err)
      }
    }



}