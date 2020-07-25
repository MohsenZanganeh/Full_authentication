let Permission = require("../../config/permission")
const { valid } = require("joi")
const { permission } = require("../Data_Layer/db/Context/Utility-Context")
class Permission_Util {
    get_Permissions_and_Validate(Value) {
        for (let i = 0; i < Permission.length; i++) {
            if (Value.name == Permission[i][0].name &&
                Value.permission_code == Permission[i][0].permission_code) {
                return true
            }
        }
    }
    Is_Exist_Permission(Permission_List = []) {
        let trust = 0;
        Permission_List.forEach(value => {
            if (this.get_Permissions_and_Validate(value)) {
                trust++
            }
        })
        if (trust != Permission_List.length) {
            return false
        }
        return true
    }
}
module.exports = new Permission_Util