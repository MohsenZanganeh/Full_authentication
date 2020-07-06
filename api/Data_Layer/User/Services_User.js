let Utility_Context = require("../db/Context/Utility-Context")
let { jwt_service } = require("../../Security-Layer/index")
let { message } = require("../../View-Layer/index")
class Services_User {
    async Login_User(Data) {
        await Utility_Context.Transaction(async () => {
            let User=await Utility_Context.User().Is_Exist_User(Data)
            if (User) {
                User.User_Password = User.User_Passwords[0].get()
                delete User.User_Passwords
               //return checkpassword
            }
        }).catch(() => {
            message.SetMessage(message.Not_Verify_Email)
        })
        return message.GetMessage();
    }
}
module.exports = new Services_User