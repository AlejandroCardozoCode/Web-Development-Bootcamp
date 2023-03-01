const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// funcion que gestiona cuando el servidor recibe un get en la ruta raiz 
app.get("/", function (request, response) {
    // envía una respuesta
    response.sendFile(__dirname + "/index.html");
});


app.post("/bmicalculator", function (req, res) {
    altura = Number(req.body.altura);
    peso = Number(req.body.peso);
    resultado = (peso / (altura * altura));

    res.send("su bmi es: " + resultado);
})

// inicio del servidor web
app.listen(3000, function () {
    console.log("server started");
});