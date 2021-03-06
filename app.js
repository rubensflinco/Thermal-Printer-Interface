var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const SerialPort = require('serialport');
var ip = require('ip');
var print = require('./functions/print');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('pages/error');
});

app.listen(80, async () => {
  console.log("[Server] Servidor aberto na porta 80");
  console.log(`[Server] Ip da maquina ${ip.address()}`);

  SerialPort.list().then(async function (ports) {
    ports.forEach(function (port) {
      console.log("[Print] Portas da raspberry: ", port);
    })

    let ipAtual = await ip.address();
    await print.run(` Ligando, test impressão... `);
    await print.run(`
      Ip atual da interface web:
      ${ipAtual}
    `);
  });

});
