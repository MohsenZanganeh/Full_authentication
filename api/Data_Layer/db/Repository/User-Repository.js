let Generic_Repository = require("./Generice-Repository")
let { message } = require("../../../View-Layer/index") 
const { remove } = require("winston") 
class User_Reposiroty extends Generic_Repository {
  constructor(_db) {
    super() 
    this.db = _db
    this.model = _db.User
  }
  async Login(Data) {
    try {
     let User=this.Is_Exist_User(Data)
      if (User) {
        User.User_Password = User.User_Passwords[0].get()
        delete User.User_Passwords
        return User 
      }
      //await argon_service().verifyhashing(Data.password, User_Password.password)
      return null 

    } catch (err) {
      console.log(`Login->Model:User -> ${err}`)
      return message.Faild
    }
  }
  Is_Exist_User(Data){
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


