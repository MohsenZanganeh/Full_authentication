let Generic_Repository = require("./Generice-Repository")
let { message } = require("../../../View_Layer/index") 
class Role_Reposiroty extends Generic_Repository {
  constructor(_db) {
    super() 
    this.db = _db
    this.model = _db.Role
  }
  async Is_Exist_Role(Data){
    try {
        let Role = await this.model.findOne({
            where: { responsibility: Data.responsibility,name:Data.name }
          })
        return Role == null ? null : Role

      } catch (err) {
        console.log(`Is_Exist_Role->Model:Role-> ${err}`)
        return message.Faild
      }
  }
  async Is_Exist_Permission(UserId,permission_code){
    try {
        let Role = await this.model.findOne({
            where: { UserId:UserId },
            include:{
              model:this.db.Permission,
              where:{permission_code:permission_code}
            }
          },)
        return Role == null ? null : Role

      } catch (err) {
        console.log(`Is_Exist_Role->Model:Role-> ${err}`)
        return message.Faild
      }
  }
}
module.exports = Role_Reposiroty


