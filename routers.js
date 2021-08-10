var express = require('express')
var router = express.Router()
router.get('/',(req,res)=>res.end('Hi'))
router.post('/test',(req,res)=>res.end('Hello I am post'))
module.exports = router