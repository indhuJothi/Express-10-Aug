var express = require('express')
var app = express()
var multer = require('multer')
var upload = multer()
var bodyParser = require('body-parser')

app.set('view engine', 'jade')
app.set('views','./views')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// app.use(upload.array())
// app.use(express.static())
app.get('/',(req,res)=>{
    res.render('form')
})

app.post('/',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})


app.listen(3000)
