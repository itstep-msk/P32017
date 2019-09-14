var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");
var server = express();

server.use(bodyParser.urlencoded());
// Указываем публичную папку с файлами
server.use("/static", express.static(__dirname + "/img"));

server.listen(7777);

server.get("/", function(request, response) {
	var form = fs.readFileSync("template-form.html", "utf8");

	response.send(form);
})

server.get("/comments", function(request, response) {
	var comment = fs.readFileSync("template-comment.html", "utf8");
	var commentsText = ["apple", "orange", "house"];
	var comments = "";

	for(var i = 0; i < commentsText.length; i++) {
		comments += comment.replace("%user-text%", commentsText[i]);
	}

	response.send(comments);
})

server.get("/news", function(request, response) {
	response.send("<img src='/static/logo.jpg'>");
})

server.get("*", function(request, response) {
	response.send("<h2>404</h2>")
})

server.post("/apple", function(request, response) {
	console.log(request.body);
	response.send("Овощ: " + request.body.vegetable);
})