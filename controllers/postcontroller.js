

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
        const userObj= user.findById({_id:request.user})
        const userName= userObj.userName
        response.render("member",{posts:posts,user:userName})
      }
      catch(err){
        console.log(err)

      }
        

    }


}