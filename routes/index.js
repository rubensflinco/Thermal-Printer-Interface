var express = require('express');
var router = express.Router();
var print = require('../functions/print.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('pages/index');
});

router.get('/imprimir', function (req, res, next) {
  print.run(req.query.texto).then((resPrint) => {
    res.send(`<h1>${resPrint}</h1>`);
    setTimeout(()=>{
      res.redirect("/");
    }, 5000)
  }).catch((err) => {
    res.send(`<h1>ERRO: ${err}</h1>`);
  })
});


module.exports = router;
