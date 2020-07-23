let Utility_Context = require("../db/Context/Utility-Context")
let {Generator}=require("../../Utility_Layer/index")
const message = require("../../View_Layer/message")
class Services_Role{
    insert_Role(Data){
        await Utility_Context.Transaction(async () => {
            
            Data.Permission = [Data.Permission]
            //Property User 
            let Role = await Utility_Context.Role().Insert(Data, {
                include: [await Utility_Context.db.Permission]
            })
            message.SetMessage(Role);
        }).catch(() => {
            message.SetMessage()
        })
        return message.GetMessage();
    }
}

module.exports=new Services_Role