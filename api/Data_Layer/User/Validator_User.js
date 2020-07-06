let joi = require("joi")
class Validator_User {
    async Login_User(req, res) {
        let Login_schema = joi.object({
            email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: joi.string().empty()
        })
        let result = this.Validate(req, res, Login_schema)
        if (result) {
            return result
        }
    }

    Validate(req, res, schema) {
        var _value;
        joi.validate(req.body, schema, (err, value) => {
            if (err) {
                res.send(err)
                return false
            }
            _value = value
        })
        return _value
    }
}
module.exports = new Validator_User