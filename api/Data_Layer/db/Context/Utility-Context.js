let _db = require("../Models/index")
let Generic_Repository = require("../Repository/Generice-Repository")
let User = require("../Repository/User-Repository")
class Utility_Context {
    constructor() {
        this.db = _db
    }
    User() {
        if (!this.user) {
            this.user = new User(this.db)
            return this.user
        }
        return this.user
    }

    User_Password() {
        if (!this.user_password) {
            this.user_password = new Generic_Repository(this.db)
            return this.user_password
        }
        return this.user_password
    }
    Role() {
        if (!this.Role) {
            this.Role = new Generic_Repository(this.db)
            return this.Role
        }
        return this.Role
    }
    Permission() {
        if (!this.Permission) {
            this.Permission = new Generic_Repository(this.db)
            return this.Permission
        }
        return this.Permission
    }

    async Transaction(func) {
        await this.db.sequelize.transaction(async () => {
                await func()
        })

    }
}
module.exports = new Utility_Context