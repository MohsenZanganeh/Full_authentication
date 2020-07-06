let argon=require("argon2")
module.exports={
    async hashingpassword(password){
        let pass=await argon.hash(password)
        return pass
    },
    async verifyhashing(password,hash){
        return await argon.verify(hash,password)
    }
}