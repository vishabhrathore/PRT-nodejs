const mongoose = require("mongoose")
const dotenv = require("dotenv")
mongoose.set("strictQuery", false)
dotenv.config()

const url = process.env.DB_URL
async function getConnected (){
    await mongoose.connect(url).then(()=>{
        console.log("Connected Sucessfully")
    }).catch((e)=>{
        console.log(e)
    })
}
module.exports = getConnected;

// const uri = "mongodb+srv://vishabhrathore1995:<password>@cluster0.3rkdhuy.mongodb.net/?retryWrites=true&w=majority";