class jwt_services {
     CreatToken(Data) {
        Data.expLink = moment().add(30, "m").unix()
        return jwt.sign(Data, process.env.Secret)
    }
}
module.exports = new jwt_services