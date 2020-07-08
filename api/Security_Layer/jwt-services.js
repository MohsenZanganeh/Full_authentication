let moment=require("moment")
let jwt=require("jsonwebtoken")
class jwt_services {
     CreatToken(Data) {
        Data.expLink = moment().add(30, "m").unix()
        return jwt.sign(Data, process.env.Secret)
    }
    GetTokenFromUrl(req){
        return  req.query.token!=null?
          req.query.token:
          req.header("Token") ;
      }
      CheckExpiresToken(decode){
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
}
module.exports = new jwt_services