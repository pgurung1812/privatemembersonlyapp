
module.exports={
 
    getHome:  (request,response)=>{

        try{
          response.render("index.ejs")

        }
        catch(err){
          console.log(err)
        }

    }






}