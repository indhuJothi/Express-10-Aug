var express = require('express')
var app = express()
app.get('/:id([0-9]{5})',(req,res)=>res.send(req.params.id))
app.get('*',(req,res)=>res.send(`The URL not matching`))
app.listen(3000,()=>console.log('Server is listening..'))