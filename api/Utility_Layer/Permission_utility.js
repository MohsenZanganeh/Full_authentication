let Permission = require("../../config/permission")
class Permission_Util {
    get_Permissions_and_Validate(Value) {
        for (let property in Permission) {
            if (Value.name == permission[property].name &&
                Value.permission_code == permission[property].permission_code) {
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