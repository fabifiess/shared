// Is MySQL on?

var express = require('express');
//var fs = require('fs');
var multer = require('multer');          // File Upload / Middleware zum Parsen von Multipart forms
var db = require('./scripts_server/db.js');             // Datenbank-Operationen
var app = express();
var http = require('http');             //  Die Kurzform für diese beiden Zeilen ist:
var server = http.createServer(app);    //  var server = require('http').Server(app);
var io = require('socket.io')(server);


/*
 Statische externe Dateien liegen im Folder public
 */

app.use(express.static(__dirname + '/public'));


/*
 *File-Upload / multer konfigurieren, damit Files automatisch schon in den richtigen Ordner gespeichert werden.
 */

app.use(multer(
    {
        dest: './public/img/',
        rename: function (fieldname, filename) {
            return filename + Date.now();
        }
    }));


/* AB HIER KOMMEN DIE ROUTEN, DIE DER SERVER IMPLEMENTIERT */

/*
 Lege eine index.html auf den Server -> http://localhost:3000 oder http://localhost:3000/html/index.html
 Die index.html wird oben schon über static freigegeben, deshalb hier nur ein redirect auf die index.html
 */

app.get('/', function (req, res) {
    res.redirect('/html/index.html');
});


/*
 Inhalte aus dem Formular holen und in der Datenbank abspeichern
 */

app.post('/upload', function (req, res) {
    if (req.body.description) var form_description = req.body.description;
    if (req.body.examples) var form_examples = req.body.examples;
    if (req.files.img1) {  // Extract file names of visuals
        var form_datei1 = JSON.stringify(req.files.img1.name);
        form_datei1 = form_datei1.substring(1, form_datei1.length - 1);
    }


    // Informationen in die Datenbank eintragen (2 Tabellen + 1 Zwischentabelle): Argumente abwechselnd für beide
    // Tabellen. Nicht besetzte Felder sind null oder werden ausgelassen. 1.Name Tabelle1, 2.Name Tabelle2, 3.Name
    // Zwischentabelle 4.Verweis auf SQL-Befehl für Tabelle1, 5.dasselbe für Tabelle2, 6.table1_val1, 7.table2_val1,
    // 8.table1_val2, 9.table2_val2 ... 15.table2_val5
    db.addEntry("sweets", "visuals", "sweets_visuals", "queries.insertSweets", "queries.insertVisuals", form_description, form_datei1, form_examples);
    // mit "/" wird einfach wieder dieselbe Route, also index.html geladen
    res.redirect('/');
});


/*
 Socket.io
 */

io.on('connection', function (socket) {          // mit dem Parameter (socket ist ein beliebiger Name), wird der anonymen Funktion eine Referenz auf
    // Socket.io weitergegeben
    socket.on('chat message', function (msg) {   // "on": Empfangen, "emit": Senden;
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
});



/*
 Server auf den TCP-Port 3000 legen
 */

server.listen(3000, function () {
    console.log('listening on port 3000');
});