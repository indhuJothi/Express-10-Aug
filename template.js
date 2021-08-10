var express = require('express')
var app = express()

app.set('view engine','jade')
app.set('views','./views')

app.get('/',(req,res)=>{

    res.render('index',{
        user : {
        name : 'Express Template',
        people  : "Indhu"
        }
     
    }
    
)})

app.listen(3000,(req,res)=>console.log('I am running...'))