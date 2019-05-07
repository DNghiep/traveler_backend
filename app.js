var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Predefined api routes
var accountRouter = require('./routes/account/index')
var bookingRouter = require('./routes/booking/index')
var historyRouter = require('./routes/history/index')
var loginRouter = require('./routes/login/index')
var searchRouter = require('./routes/search/index')
var signupRouter = require('./routes/signup/index')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/account', accountRouter)
app.use('/api/booking', bookingRouter)
app.use('/api/history', historyRouter)
app.use('/api/login', loginRouter)
app.use('/api/search', searchRouter)
app.use('/api/signup', signupRouter)

module.exports = app;
