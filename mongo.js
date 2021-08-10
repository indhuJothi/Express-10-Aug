// var express = require('express')
// var mongoose = require('mongoose')
// var app = express()
// var bodyParser = require('body-parser')
// mongoose.connect('mongodb://localhost:27017/expressMongo')
// app.set('view engine', 'jade')
// app.set('views','./views')
// var personSchema = mongoose.Schema({
//     name : String,
//     age : Number,
//     nationality : String
// })
// var Person = mongoose.model('Person',personSchema)

// app.get('/person',(req,res)=>{
//     res.render('mongoForm')
// })
// app.post('/person',(req,res)=>{
//     var personInfo = req.body;
//     if(!personInfo.name|| !personInfo.age || !personInfo.nationality){
//         res.render('show_message',{
//             message:' sorry, you provided wrong info', type: 'error'
//     })}
//     else{
//             var newPerson = new Person({
//                 name : personInfo.name,
//                 age : personInfo.age,
//                 nationality : personInfo.nationality
//             })
//             newPerson.save((err,Person)=>{
//                 if(err) throw Error
//                 else{
//                     res.render('show_message',{
//                         message: 'New person added', type : "success", person : personInfo
//                     })
//                 }
//             })
//         }
//      } )


// app.listen(3000)
var express = require('express')
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/expressMongo');
var app = express()
var multer =require('multer')
var bodyParser = require('body-parser')
app.set('view engine','jade')
app.set('views','./views')
var upload = multer()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// app.use(upload.array())
var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
 });
 var Person = mongoose.model("Person", personSchema);
 
 app.get('/person', function(req, res){
    res.render(Person);
   // res.send('hello')
 });
//  app.post('/person', function(req, res){
//     var personInfo = req.body; //Get the parsed information
    
//     if(!personInfo.name || !personInfo.age || !personInfo.nationality){
//        res.render('show_message', {
//           message: "Sorry, you provided worng info", type: "error"});
//     } else {
//        var newPerson = new Person({
//           name: personInfo.name,
//           age: personInfo.age,
//           nationality: personInfo.nationality
//        });
         
//        newPerson.save(function(err, Person){
//           if(err)
//              res.render('show_message', {message: "Database error", type: "error"});
//           else
//              res.render('show_message', {
//                 message: "New person added", type: "success", person: personInfo});
//        });
//     }
//  });
//  Person.find(function(err, response){
//     console.log(response);
//  });
//  Person.find({name:'satheesh'},(err,res)=>{
//      console.log(res)
//  })

// Person.update({age:55},{nationality:'Indian'},function(err,res){
//    console.log('Updated')
// })

// Person.findOneAndUpdate({name:'Barani'},{nationality:'Indian'},(err,res)=>{
//    console.log(res)
// })
app.put('/People/:id', function(req, res){
   Person.findByIdAndUpdate(req.params.id, req.body, function(err, response){
      if(err) res.json({message: "Error in updating person with id " + req.params.id});
      res.json(response);
   });
});

app.delete('/people/:id',function(req,res){
   Person.findOneAndRemove(req.params.id,function(err,response){
      if(err) throw Error
      else res.json({
         message:'Person with id '+req.params.id + ' removed'
      })
   })
})

 app.listen(3000,()=>console.log('I am listening..'))