var express = require('express');
var router = express.Router();
var signupPage = require('../API/home') ;
var models=require('../models');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var isAuthenticated=(req,res,next)=>{
  console.log('middleware details',req.body,req.query);
  next();
}

router.post('/login',isAuthenticated,signupPage.Signup);


module.exports = router;
