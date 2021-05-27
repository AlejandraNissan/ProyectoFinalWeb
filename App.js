var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const {MongoClient} = require('mongodb');

const uri = "mongodb+srv://ProyectoFinalWeb:zgFyV5wbuIJUyoTf@cluster0.ynzjk.mongodb.net/test"
const client = new MongoClient(uri);

app.use(express.static('Public'));

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(urlencodedParser)

app.post('/APIAgregarLibro', function(req,res) {
    console.log("Probando API");
    console.log(req.body.Autor);
    var nombre = req.body.Nombre;
    var autor = req.body.Autor;
    var fecha = req.body.Año;
    var genero = req.body.Gen;
    var estado = req.body.Estado;
    console.log(nombre + ' | ' + autor + ' | ' + fecha + '|' + genero + '|' + estado);
    libro = {"titulo": nombre, "autor": autor, "fecha": fecha, "genero": genero, "estado": estado};
    agregarLibro(libro)
});

app.get('/APILeido', function(req,res) {

    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var dbo = db.db("ProyectoFinalWeb");
        var query = {estado: "Leido"}
        dbo.collection("Libros").find(query).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result);
          db.close();
        });
      }); 
});

app.get('/APILeyendo', function(req,res) {
});

app.get('/APIPorLeer', function(req,res) {
});

async function agregarLibro(myobj) {
	// we'll add code here soon
    const uri = "mongodb+srv://ProyectoFinalWeb:zgFyV5wbuIJUyoTf@cluster0.ynzjk.mongodb.net/test"
    const client = new MongoClient(uri);

    try {
        await client.connect();
    
        //await listDatabases(client);
        var dbo = client.db("ProyectoFinalWeb").collection("Libros");
        dbo.insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            client.close();
          });

    } catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }
} 

app.listen(5500);