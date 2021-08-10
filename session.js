// var express = require('express')
// var app = express()
// var cookieParser= require('cookie-parser')
// var session = require('express-session')

// app.use(cookieParser())
// app.use(session({secret:"It's a secret!"}))

// app.get('/',(req,res)=>{
//     if(req.session.page_view){
//        req.session.page_view++
//        res.send('You visited the page '+req.session.page_view)
//     }
//     else{
//         req.session.page_view=1
//         res.send('you visite the page'+req.session.page_view)
//     }
// })

// app.listen(4000)

var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));

app.get('/', function(req, res){
   if(req.session.page){
      req.session.page++;
      res.send("You visited this page " + req.session.page + " times");
   } else {
      req.session.page= 1;
      res.send("Welcome to this page for the first time!");
   }
});
app.listen(3000);