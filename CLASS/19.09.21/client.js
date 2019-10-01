var http = require("http");

setInterval(function() {
var apple = Math.floor(Math.random()*100);
var options = "http://localhost:7777/?apple=" + apple;
var response = http.request(options, function(res) {
	// Получение данных
	res.on("data", function(fromServer) {
		console.log(fromServer.toString("utf8"))
	})
});

response.end();

}, 10)