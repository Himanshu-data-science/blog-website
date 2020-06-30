 //error-show
 var createError = require('http-errors');
var express = require('express'); //requirement-express
var path = require('path');   //folders path show
var cookieParser = require('cookie-parser');  //cookie
var logger = require('morgan'); //testing-purpose

// var indexRouter = require('./routes/index');  
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/auth',require('./routes/users'))
app.use('/check',require('./routes/index'))
// app.use('/users', usersRouter);
// require('./routes/r-main');
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
