let Service_User   = require ("./Services_User")
let Validator_User = require("./Validator_User")
class Controller_User {
      async Login_User(req,res) {
         let result =await Validator_User.Login_User(req,res)
         if(result){
           let User = await Service_User.Login_User(result)
           res.send(User)
         } 
      }
}
module.exports = new Controller_User