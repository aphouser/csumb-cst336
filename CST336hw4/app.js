const express = require('express');
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

var faker = require('faker');
var randomName = faker.name.findName();

// routes
app.get ("/", function (req, res) {
    res.render("index.ejs", {fakerName:randomName});
})

app.get("/mobile", function(req, res) {
    res.render("mobile.html");
})

app.get("/oop", function(req, res) {
    res.render("oop.html");
})

app.get("/web", function(req, res) {
    res.render("web.html");
})

// server listener
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Express Server is running...");
})