var http = require("http");
var url = require("url");
var server = new http.Server();

server.listen(7777);
// Аргументы функции callback
// request - информация о запросе(url, браузер, данны)
// response - управление ответом (.end(), .write())
server.on("request", function(request, response) {

	//console.log()
	var result = url.parse(request.url, true);
	//console.log(result.query) // { apple: '10', orange: '20' }
	console.log(result.query.apple) // 10

	response.setHeader("Content-type", "text/html");
	response.setHeader("MyHeader", "apple");
	response.write("<h2>hello</h2>");
	response.end();
})