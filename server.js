var express = require("express");
var app = express();

app.use("/", express.static(__dirname + ""));

app.listen(6478, () => {
    console.log('Listening on: http://localhost:6478');
});