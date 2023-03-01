const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose")

// variables

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

// database

mongoose.set("strictQuery", false);
main().catch(err => console.log(err));
async function main() {
}

//schema
const itemsSchema = new mongoose.Schema({
    name: String
});

const itemsCollection = mongoose.model("Item", itemsSchema);

// métodos

app.get("/", function (req, res) {
    let day = date.getDate();
    itemsCollection.find({})
        .then((items) => {
            let itemsArray = []
            items.forEach(function (value) {
                itemsArray.push(value.name);
            })
            res.render("index", { dia: day, items: itemsArray });
        })
        .catch((err) => {
            console.error(err);
        });
});

app.post("/", function (req, res) {
    const newItem = new itemsCollection({
        name: req.body.newInput,
    })
    newItem.save()
    res.redirect("/");

});

app.post("/delete", function (req, res) {
    let deleteValue = req.body.checkbox;
    itemsCollection.deleteOne({ name: deleteValue })
        .then(() => {
            res.redirect("/");
        })
        .catch((err) => {
            console.log(err);
        })
});

app.listen(3000, function () {
    console.log("server up");
});