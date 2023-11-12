const express = require('express')
const app = express()
port = 3000

app.get('/',(req,res)=>{
    res.send("hello mainpage")
})

app.listen(port,()=>{
    console.log(port);
})