// xwciXuXVhndVMBY4

const express = require("express")
const app = express()
const cors = require('cors')
const getConnected = require("./connections/conn.js")
const crud = require("./Routes/crud")
getConnected()
app.use(cors())
app.use(express.json())
app.use(crud)
const port = process.env.PORT
app.get('/', (req, res)=>{
    res.send('hello world')
})
app.listen(port, ()=>{
    console.log("server is running at port 5000");
})
