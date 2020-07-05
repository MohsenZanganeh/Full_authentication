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

    async Transaction(func) {
        await this.db.sequelize.transaction(async () => {
                await func()
        })

    }
}
module.exports = new Utility_Context