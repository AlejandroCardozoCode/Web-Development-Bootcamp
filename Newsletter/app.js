const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const client = require("@mailchimp/mailchimp_marketing");

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

//para usar rutas estaticas para los archivos css y assets
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function (req, res) {
    nombre = req.body.nombre;
    apellido = req.body.apellido;
    email = req.body.email;
    apiKey = "502daebe23cb14faabcd63e2f610d849-us17";
    listId = "8b1f39d4b4";

    membersArray = [{
        email_address: email,
        status: "subscribed",
        merge_field: {
            FNAME: nombre,
            LNAME: apellido,
        }
    }]

    client.setConfig({
        apiKey: apiKey,
        server: "us17",
    });

    const run = async () => {
        const response = await client.lists.batchListMembers(listId, {
            members: membersArray,
        });
        console.log(response);
    };

    run();

    res.send("<h1> Thanks for subscribing </h1>");
})

app.listen(process.env.PORT || 3000, function () {

    console.log("server running")
})

