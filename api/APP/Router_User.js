let express=require("express")
let Router=express();
let Controller_User=require("../Data-Layer/User/Controller_User")

Router.get("/login-user",Controller_User.Login_User)
module.exports=Router
