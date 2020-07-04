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
           //return error
        }
    }

    //generic Delete ->any Model Can use this
    async  Delete(id,option={}) {
        try {
            let result = await this.model.destroy({ where: { id } },option)
            return result
        }
        catch (err) {
           //return error
        }
    }

    //generic Update ->any Model Can use this
    async  Update(Data, id,option={}) {
        try {
            let result = await this.model.Update(Data, { id: id },option)
            return result;
        }
        catch (err) {
            //return error
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
               //return error
            }
        }
        catch (err) {
            //return error
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
               //return error
            }
        }
        catch (err) {
           //return error
        }
    }
    //generic findOneByUUID ->any Model Can use this
    async findOneByUUID(Data,option={}) {
        try {
            let result = await this.model.findOne({ where: { uuid: Data.uuid } },option)
            return result
        }
        catch (err) {
            //return error
        }
    }
}
module.exports = Generic_Repository