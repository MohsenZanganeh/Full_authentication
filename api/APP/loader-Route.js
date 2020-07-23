let express=require("express")
let Router=express();

let User=require("./Router_User")
let Role=require("./Router_Role")

Router.use("/user",User)
Router.use("/role",Role)
module.exports=Router