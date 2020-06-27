var router = require('express').Router();
var home=require('../API/home');
function hello(){
console.log('HELLOOOOOOOO');
next();
}
router.get('/home',hello,home.homeDash);
module.exports = router;




// /* GET home page. */
// let a=['viaks','ramesh','nitin','raju','kabir'];
// let b=[{Name:'Himanshu'},{Name:'Sandeep'},{Name:'sanjay'},{Name:'rishu'},{Name:'deepak'},{Name:'bhupender'}];
// let c='Sandeep';
// router.get('/', function(req, res, next) {
//   res.render('home', { name: b,xyz:c });
// });

// module.exports = router;