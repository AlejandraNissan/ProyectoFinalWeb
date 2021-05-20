var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(urlencodedParser)

app.post('/agregarLibro', function(req,res) {
    var nombre = req.body.Nombre
    var autor = req.body.Autor
    var fecha = req.body.Año
    console.log(nombre + ' | ' + autor + ' | ' + fecha)
});

app.listen(5500);