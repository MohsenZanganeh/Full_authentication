let express=require("express")
let Router=express();

let User=require("./Router_User")

Router.use("/user",User)

module.exports=Router