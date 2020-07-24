module.exports = {
    HaveError(Data){
        if(Data.hasOwnProperty("Error")||Data==null){
            return true
        }
    },
    SetMessage(Data){
        this.Data=Data
    },
    GetMessage(){
        return this.Data;
    },
    Activation_Code: {
        Wrong_Activate_Code: {
            Error: 'The code entered is incorrect',
            status: false
        },
        Expires_Link: {
            Error: 'This link is not valid',
            status: false
        },
         Resend_Code: {
            Error: 'You may not be able to request a re-code request now',
            status: false
        },
    },
    Register_User: {
        IsExist_User: {
            Error: "You have already registered",
            status: false
        },
        Validate_Entity_User: {
            Error: "Please fill in all the star fields",
            status: false
        },
        Not_Match_Re_Password: {
            Error: "Your password does not match",
            status: false
        }
    },
    Role: {
        IsExist_Permission: {
            Error: "Your Permission not define",
            status: false
        }
    },
    Login: {
        Wrong_Username_Password: {
            Error: "The username and password are incorrect",
            status: false
        }
    },
    Not_Valid_Email: {
        Error: 'Email entered is not valid',
        status: false
    },
    Not_Verify_Email: {
        Error: 'Your email has not been activated. Please refer to your email to activate it and enable it',
        status: false
    },
    Not_Authenticat: {
        Error: 'You are not allowed to enter this section',
        status: false
    },
    Insert: {
        Error: 'problem in Registration',
        status: false
    },
    Delete: {
        Error: 'problem in Delete',
        status: false
    },
    Update: {
        Error: 'problem in Delete',
        status: false
    },
    find: {
        Error: 'problem in loading Data',
        status: false
    },
    findNoOne: {
        Error: 'No Exist Data',
        status: true
    },
    Faild: {
        Error: "Error performing operations",
        status: false
    },
    success: {
        status: true
    }
}