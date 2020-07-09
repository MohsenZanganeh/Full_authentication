let express=require("express")
let Router=express();
let Controller_User=require("../Data_Layer/User/Controller_User")
Router.post("/register-user",Controller_User.Register_User)
Router.get("/login-user",Controller_User.Login_User)
Router.get("/verify-email",Controller_User.Verifying_Email)
Router.get("/resend-email",Controller_User.Resend_Email)
module.exports=Router
