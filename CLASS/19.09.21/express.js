var express = require("express");
var server = express();

server.listen(7777);

var fruits = ["apple", "orange", "banana"];

server.get("/", function(request, response) {
	response.send("hello world");
})

server.get("/fruits", function(request, response) {
	response.send("<h1>All fruits " + fruits + "</h1>");
})

server.get("/fruits/:fruitId", function(request, response) {
	response.send("<h1>fruit " + fruits[request.params.fruitId] + "</h1>");
})

server.get("*", function(request, response) {
	response.send("<h1>404 not found</h1>");
})

// /fruits
// /fruits/0
// /fruits/1
// /fruits/2