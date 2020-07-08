let Service_User = require("./Services_User")
let Validator_User = require("./Validator_User")
class Controller_User {
  async Register_User(req, res) {
    let result = await Validator_User.Register_User(req, res)
    if (result) {
      let User = await Service_User.Register_User(result)
      res.send(User)
    }
  }
  async Login_User(req, res) {
    let result = await Validator_User.Login_User(req, res)
    if (result) {
      let User = await Service_User.Login_User(result)
      res.send(User)
    }
  }
  async Verifying_Email(req,res) {
    let result =await Validator_User.Verifying_Email(req,res)
    if(result){
      let User = await Service_User.Verifying_Email(result)
      res.send(User)
    } 
 }
}
module.exports = new Controller_User