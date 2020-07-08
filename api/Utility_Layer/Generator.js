let randomString=require("crypto-random-string")
module.exports={
    generateActivationCode(Length=5){
        let code=randomString({
            length:Length,
            characters:'1234567890'
        })
        return code
    },
    generateLinkVerifying(Token){
        return `${process.env.host}/user/verify-email?token=${Token}`
    },
}