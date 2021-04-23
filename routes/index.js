var express = require('express');
var router = express.Router();
var print = require('../print.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/imprimir', function(req, res, next) {
  print.run().then((resPrint)=>{
    res.send(resPrint);
  }).catch((err)=>{
    res.send("ERRO: "+err)
  })
});


module.exports = router;
