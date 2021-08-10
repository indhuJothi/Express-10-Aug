var express = require('express')
var app = express()
var cookieParser = require('cookie-parser')
app.use(cookieParser())
app.get('/',(req,res)=>{
    res.cookie('name','Express',{
        maxAge : 360000 + Date.now()
    }).send('cookie set')
})
app.get('/clear',(req,res)=>{
   res.clearCookie('Express')
})
app.listen(3000)