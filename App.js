var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const {MongoClient} = require('mongodb');

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
    console.log(nombre + ' | ' + autor + ' | ' + fecha + '|' + genero);
    libro = {"titulo": nombre, "autor": autor, "fecha": fecha, "genero": genero};
    agregarLibro(libro)
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