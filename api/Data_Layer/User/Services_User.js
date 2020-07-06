let Utility_Context = require("../db/Context/Utility-Context")
let { argon_service } = require("../../Security-Layer/index")
let { message } = require("../../View-Layer/index")
const { user } = require("../db/Context/Utility-Context")
class Services_User {
    async Login_User(Data) {
        await Utility_Context.Transaction(async () => {
            let User=await Utility_Context.User().Is_Exist_User(Data)
            if (User) {
                User.Password = User.User_Passwords[0].get()
                delete User.User_Passwords
                return is_currect_Password(User,Data)
            }
        }).catch(() => {
            message.SetMessage(message.Not_Verify_Email)
        })
        return message.GetMessage();
    }
    is_currect_Password(User,Data){
        if (await argon_service().verifyhashing(Data.password, User.Password)) {
            return User;
          }
          return null;
    }
}
module.exports = new Services_User