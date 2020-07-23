let joi = require("joi")
let { message } = require("../../View_Layer/index")
class Validator_Role {
    async Insert_Role(req, res) {
        const objectSchema = joi.object({
            name: joi.string().min(1).required(),
            permission_code: joi.string().min(1).required()
          }).required();
          
          const arraySchema = joi.array().items(objectSchema).min(1).unique()
          .required();
        const Insert_schema = joi.object({
            responsibility: joi.string().empty(),
            name: joi.string().empty(),
            Permission: joi.alternatives().try(objectSchema, arraySchema).required()
        })

        let result = this.Validate(req, res, Insert_schema)

        return result

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
module.exports = new Validator_Role