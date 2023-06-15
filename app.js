var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/", (req, res, next) => {
    res.send("Welcome to the site!");
    console.log("someone accessed the / endpoint")
   });

app.get("/brian", (req, res, next) => {
    res.send("hi brian");
    console.log("someone accessed the /brian endpoint")
   });