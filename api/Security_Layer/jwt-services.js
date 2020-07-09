let moment = require("moment")
let jwt = require("jsonwebtoken")
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
  async Authenticat(req, res, next) {
    try {
      let decode = this.VerifyToken(req)
      if (!decode == false) {
        let User = await Utility_Context.User().Is_Exist_User(decode.email)
        if (!message.HaveError(User)) {
          next()
          return;
        }
        throw new Error()
      }
      throw new Error()
    } catch (err) {
      res.send(message.Not_Authenticat)
    }
  }
}
module.exports = new jwt_services