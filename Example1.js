var express = require('express')
var app = express()
var routers = require('./routers') // step -2 I
// app.all('/test',(req,res)=>{
//     res.end('Hello world')
// }) - step 1

app.use('/routers',routers)
app.listen(3000,()=>console.log('server is listening...')) //step-2 II