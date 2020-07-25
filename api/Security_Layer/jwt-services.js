let moment = require("moment")
let jwt = require("jsonwebtoken")
let { message } = require("../View_Layer/index")
let Utility_Context = require("../Data_Layer/db/Context/Utility-Context")
class jwt_services {
  CreatToken(Data) {
    Data.expLink = moment().add(30, "m").unix()
    return jwt.sign(Data, process.env.Secret)
  }
  GetTokenFromUrl(req) {
    return req.query.token != null ?
      req.query.token :
      req.header("Token");
  }
  CheckExpiresToken(decode) {
    if (decode.expLink < moment().unix()) {
      return false
    }
    return decode
  }
  VerifyToken(req) {
    let token = this.GetTokenFromUrl(req)
    if (token) {
      let decode = jwt.verify(token, process.env.Secret)
      return this.CheckExpiresToken(decode)
    }
    return false
  }
  async Authenticat(req, res, next,permission) {
    try {
      let decode = this.VerifyToken(req)
      if (!decode == false) {
        let User = await Utility_Context.User().Is_Exist_User(decode.email)
        if (message.HaveError(User)) {
          throw new Error()
        }
        let Role = this.check_Have_Permission(User.id,permission)
        if (Role) {
          next();
          return;
        }
      }
      throw new Error()
    } catch (err) {
      res.send(message.Not_Authenticat)
    }
  }
  async check_Have_Permission(UserId, permission) {
    try {
      let Role = await Utility_Context.Role().Is_Exist_Permission(UserId, permission)
      if (!message.HaveError(Role)) {
        return Role;
      }
      throw new Error()
    } catch (err) {
      res.send(message.Not_Have_Permission)
    }
  }
   checkPermission(Permission){
    return (req,res,next) => this.Authenticat(req,res,next,Permission)
  }
}
module.exports = new jwt_services