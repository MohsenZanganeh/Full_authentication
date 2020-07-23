let Service_Role= require("./Services_Role")
let Validator_Role = require("./Validator_Role")
class Controller_Role {
  async Insert_Role(req, res) {
    let result = await Validator_Role.Insert_Role(req, res)
    if (result) {
      let Role = await Service_Role.insert_Role(result)
      res.send(Role)
    }
  }
}
module.exports = new Controller_Role