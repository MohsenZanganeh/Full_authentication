let Utility_Context = require("../db/Context/Utility-Context")
let {Generator}=require("../../Utility_Layer/index")
const message = require("../../View_Layer/message")
class Services_Role{
   async insert_Role(Data){
        await Utility_Context.Transaction(async () => {
            //Data.Permission most be A Array list
            Data.Permissions =Data.Permission
            let Role = await Utility_Context.Role().Insert(Data, {
                include: [await Utility_Context.db.Permission]
            })
         return Role;
         }).catch((err) => {
             message.SetMessage(err)
         })
         return message.GetMessage();
    }
}

module.exports=new Services_Role