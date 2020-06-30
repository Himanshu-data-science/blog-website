var express = require('express');
var router = express.Router();
var auth = require('../API/auth');
/* GET users listing. */
router.post('/login',(req,res,next)=>{
  console.log("Hello your name is ",req.body.userName)
  next();
},auth.login);

module.exports = router;
