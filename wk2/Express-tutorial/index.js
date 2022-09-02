const express = require("express");
const app = express();
const port = 3000;

app.listen(port, function () {
	console.log("server running");
});

app.get("/", function (req, res) {
	res.send("Hello World!");
});

app.get("/parks", function (req, res) {
	res.send("the parks youve seen");
});
