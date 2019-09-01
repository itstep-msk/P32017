var http = require("http");

http.createServer(server).listen(7777);

function server(request, response) {
	console.log("connect to server...");
	response.setHeader("Content-Type", "text/html");
	response.write("<h2>hello from server</h2>");
	response.end();
}