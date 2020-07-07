"use strict";
const nodemailer = require("nodemailer");
let {message}=require("../View-Layer/index")
let config=require("../../config/email.json")
class SendEmail {
    transporter() {
        return nodemailer.createTransport(config.configTransport);
    }

   async sendEmail(email, text) {
       let result;
        await this.transporter().sendMail({
            from: '"Mohsen" <mohsen.1398.pg@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Arikan", // Subject line
            text: text // html body
        }).then(()=>{
            result = message.success
        });
        return result
    }
}
module.exports=new SendEmail;
