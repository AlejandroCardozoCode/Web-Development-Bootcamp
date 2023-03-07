require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

// app values
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// database
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/usersDB")
    .catch((err) => console.log(err))
    .then(() => console.log("database connected"));
;

//schema
const userSchema = new mongoose.Schema({
    user: String,
    pwd: String
});

const userModel = mongoose.model("User", userSchema);

app.get("/", function (req, res) {
    res.render("home");
})

app.get("/login", function (req, res) {
    res.render("login");
})

app.post("/login", function (req, res) {
    const user = req.body.username;
    const pwd = req.body.password;

    userModel.findOne({ user: user })
        .then(function (foundUser) {
            bcrypt.compare(pwd, foundUser.pwd, function (err, result) {
                if (result == true) {
                    res.render("secrets");
                }
            })
        })
        .catch((err) => console.log(err));
})

app.get("/register", function (req, res) {
    res.render("register");
})

app.post("/register", function (req, res) {

    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        if (err) {
            console.log(err);
            res.redirect("/");
        }
        let user = new userModel({
            user: req.body.username,
            pwd: hash,
        });
        user.save()
            .then(function (insertedUser) {
                res.render("secrets");
            })
            .catch(function (err) {
                console.log(err);
            });
    });
})

app.listen(3000, function () {
    console.log("server running")
})