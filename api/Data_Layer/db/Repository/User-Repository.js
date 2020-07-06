let Generic_Repository = require("./Generice-Repository")
let { message } = require("../../../View-Layer/index") 
const { remove } = require("winston") 
class User_Reposiroty extends Generic_Repository {
  constructor(_db) {
    super() 
    this.db = _db
    this.model = _db.User
  }
  async Is_Exist_User(Data){
    try {
        let User = await this.model.findOne({
            where: { email: Data.email },
            include: [this.db.User_Password]
          })
        return User == null ? null : User

      } catch (err) {
        logger.error(`Is_Exist_User->Model:User-> ${err}`)
        return message.Faild
      }
  }
  
}
module.exports = User_Reposiroty


