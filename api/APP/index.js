let express=require("express")
let http=require("http")
let db=require("../Data-Layer/db/Models/index")
let body_parser=require("body-parser")
let app=express()

class Application{
    constructor(){
        this.SetupConfig();
        this.SetupRoute();
        this.SetupDataBase()
        this.StupServer();
    }
    SetupConfig(){
        app.use(body_parser.json())
        app.use(body_parser.urlencoded({extended:true}))
    }
  SetupDataBase(){ 
        db.sequelize.sync({force:true}).then(() => {
            console.log("Connect To DataBase.....")
        }).catch((ex) => {
            console.log(`Can Not Connect To DataBase ${ex.message}` )
        })
    }
    SetupRoute(){
        app.get("/",(req,res)=>{
            res.send("Hello")
        })
        
        console.log(`Setup Route SeccussFully`)
    }
    StupServer(){
        const server=http.createServer(app)

        server.listen(process.env.PORT,()=>{
            console.log(`Connect To Server With Port:${process.env.PORT}`)
        })
    }
   
}
module.exports=Application