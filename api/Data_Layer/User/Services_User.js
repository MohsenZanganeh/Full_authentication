let Utility_Context = require("../db/Context/Utility-Context")
let { argon_service,email_sender,jwt_service } = require("../../Security_Layer/index")
let {Generator}=require("../../Utility_Layer/index")
let { message } = require("../../View_Layer/index")
const moment = require("moment")
class Services_User {
    async Register_User(Data) {
        await Utility_Context.Transaction(async () => {
            let check_exist_user = await Utility_Context.User().Is_Exist_User(Data)
            if (message.HaveError(!check_exist_user)) {
              return false //if Exist User->return false->so User is register
            }
            Data.User_Passwords = [{ password: await argon_service.hashingpassword(Data.password) }]
            Data.activationEmailExpiresAt = moment().add(30, "m")
            Data.activationEmailExpiresResend = moment().add(10, "s")
            Data.activationCode = Generator.generateActivationCode();
            //Property User 
            let User = await Utility_Context.User().Insert(Data, {
                include: [await Utility_Context.db.User_Password]
            })
            //Insert User
            if (message.HaveError(User)) {
                throw new Error();
            }
           let email = this.SendEmail_Verifycation(User)
            if (message.HaveError(email)) {
                throw new Error();
            }
            message.SetMessage(User.JsonUser());
        }).catch(() => {
            message.SetMessage(message.Not_Verify_Email)
        })
        return message.GetMessage();
    }
    async Login_User(Data) {
        await Utility_Context.Transaction(async () => {
            let User = await Utility_Context.User().Is_Exist_User(Data)
            if (User) {
                User.Password = User.User_Passwords[0].get()
                delete User.User_Passwords
                message.SetMessage(is_currect_Password(User, Data))
            }
            else {
                message.SetMessage(message.Wrong_Username_Password)
            }
        }).catch(() => {
            message.SetMessage(message.Not_Verify_Email)
        })
        return message.GetMessage();
    }
    async SendEmail_Verifycation(User) {
        let Token = jwt_service.CreatToken(User.JsonUserWithCode())
        let Link = Generator.generateLinkVerifying(Token)
        let email = await email_sender.sendEmail(User.email, Link)
        return email
    }
    async Verifying_Email(Data) {
        await Utility_Context.Transaction(async () => {
            //Expires Code And Token
            let User = await Utility_Context.User().Is_Valid_Email(Data)
            if (moment().isAfter(User.activationEmailExpiresAt)||message.HaveError(User)) {
                throw new Error()
            }
            User.emailValidate = true
            User.activationCode = null;
            User.activationEmailExpiresAt = null
            User.activationEmailExpiresResend = null
            User.save();
            message.SetMessage(message.success);
        }).catch(() => {
            message.SetMessage(message.Activation_Code.Expires_Link);
        })
        return message.GetMessage()
    }
    async is_currect_Password(User, Data) {
        if (await argon_service().verifyhashing(Data.password, User.Password)) {
            return User;
        }
        return null;
    }
}
module.exports = new Services_User