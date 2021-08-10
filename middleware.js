// var express = require('express');
// var app = express();

// //Middleware function to log request protocol
// app.use('/', function(req, res, next){
//    console.log("A request for things received at " + Date.now());
//    next();
// });

// // Route handler that sends the response
// app.get('/things', function(req, res){
//    res.send('Things');
// });

// app.listen(3000);



var express = require('express')
var app = express()
app.use(function(req,res,next){
  
    console.log('I am first middleware')
    next()
})
app.get('/',(req,res,next)=>{
    res.send('Hello I am get method')
    console.log('I am second')
     next()
})

app.use((req,res)=>{
    console.log("I am ending")
    
})

app.listen(3000)

