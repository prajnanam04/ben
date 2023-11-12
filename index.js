require('dotenv').config()
const express = require('express')
const app = express()
port = 3000

app.get('/',(req,res)=>{
    res.send("hello mainpage")
})

app.listen(process.env.PORT,()=>{
    console.log(process.env.PORT);
})