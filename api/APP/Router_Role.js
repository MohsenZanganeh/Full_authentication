let express=require("express")
let Router=express();
let Controller_Role=require("../Data_Layer/Role/Controller_Role")
Router.post("/insert-role",Controller_Role.Insert_Role)

module.exports=Router
