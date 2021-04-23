var express = require('express');
var router = express.Router();
var print = require('../functions/print.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('pages/index', {impresso: req.query.impresso});
});

router.get('/imprimir', function (req, res, next) {
  print.run(req.query.texto).then((resPrint) => {

    res.redirect("/?impresso=true");

  }).catch((err) => {

    res.render('pages/error', {
      message: "Erro na Impressão",
      error:{
        status: 01
      }
    });

  })
});


module.exports = router;
