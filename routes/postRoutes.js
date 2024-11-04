const express=require("express")
const router=express.Router()
const postController=require("../controllers/postcontroller")
const {ensureAuth}= require("../middleware/auth")
const userController=require("../controllers/usercontroller")

router.get("/",ensureAuth,postController.getPost)
router.get("/member",ensureAuth,postController.getPostForMember)
router.post("/createpost",ensureAuth,postController.addPost)
router.post("/passcode",ensureAuth,userController.addMembership)
router.get("/admin", postController.getAdminPage)
router.delete("/deletePost/:id",postController.deletePost)


module.exports=router