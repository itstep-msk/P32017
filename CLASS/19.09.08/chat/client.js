var net = require("net");
var clinet = new net.Socket();
var user = {
	name: process.argv[2],
	message: process.argv[3]
}

clinet.on("error", function() {})
clinet.on("close", function() {})
clinet.setEncoding("utf8")

clinet.connect(7777, "localhost", function() {
	console.log("connected to server");
	clinet.write(JSON.stringify(user));
})

clinet.on("data", function(data) {
	var serverData = JSON.parse(data);
	console.log(serverData.name + ": " + serverData.message);
})