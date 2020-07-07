let { message } = require("../../../View_Layer/index")
class Generic_Repository {
    constructor(_model) {
        this.model = _model;
    }
    //generic Insert->any Model Can use this
    async Insert(Data,option={}) {
        try {
            let result = await this.model.create(Data,option)
            return result
        }
        catch (err) {
            console.log("Insert->",err)
            return message.Insert
        }
    }

    //generic Delete ->any Model Can use this
    async  Delete(id,option={}) {
        try {
            let result = await this.model.destroy({ where: { id } },option)
            return result
        }
        catch (err) {
            console.log(`Destroy->${err}`)
            return message.Delete
        }
    }

    //generic Update ->any Model Can use this
    async  Update(Data, id,option={}) {
        try {
            let result = await this.model.Update(Data, { id: id },option)
            return result;
        }
        catch (err) {
            console.log(`Update->${err}`)
            return message.Update
        }
    }
    //generic findAll ->any Model Can use this
    async findAll(option={}) {
        try {
            let result = await this.model.findAll({},option)
            if (result > 0) {
                return result
            }
            else {
                return message.findNoOne
            }
        }
        catch (err) {
            console.log(`findAll->${err}`)
            return message.find
        }
    }
     //generic findOneByid ->any Model Can use this
    async findOneByid(id,option={}) {
        try {
            let result = await this.model.findOne({ where: { id: Data.id } },option)
            if (result > 0) {
                return result
            }
            else {
                return message.findNoOne
            }
        }
        catch (err) {
            console.log(`findOneByid->${err}`)
            return message.find
        }
    }
    //generic findOneByUUID ->any Model Can use this
    async findOneByUUID(Data,option={}) {
        try {
            let result = await this.model.findOne({ where: { uuid: Data.uuid } },option)
            return result
        }
        catch (err) {
            console.log(`findOneByUUID->${err}`)
            return message.find
        }
    }
}
module.exports = Generic_Repository