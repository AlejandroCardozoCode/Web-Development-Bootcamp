// importación de express
const express = require("express");

// creación del servidor
const app = express();

// funcion que gestiona cuando el servidor recibe un get en la ruta raiz 
app.get("/", function (request, response) {
    // envía una respuesta
    response.send("hola mundo");
});

// inicio del servidor web
app.listen(3000, function () {
    console.log("server started");
});


