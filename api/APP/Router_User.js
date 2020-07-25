let express=require("express")
let Router=express();
let {jwt_service}=require("../Security_Layer/index")
let permission=require("../../config/permission")
let Controller_User=require("../Data_Layer/User/Controller_User")
Router.post("/register-user",Controller_User.Register_User)
Router.get("/login-user",Controller_User.Login_User)
Router.get("/verify-email",Controller_User.Verifying_Email)
Router.get("/resend-email",Controller_User.Resend_Email)

Router.get("/get-user",jwt_service.checkPermission(permission.Get_All_User),(req,res)=>{res.send("Yes your verifying")})
Router.get("/get-product",jwt_service.checkPermission(permission.Get_All_Product),(req,res)=>{res.send("Yes your verifying")})
module.exports=Router
