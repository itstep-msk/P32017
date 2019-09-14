var server = require("net");
var users = [];

server.createServer(handler).listen(7777);

function handler(user) {
	console.log("user connected");
	users.push(user);
	user.setEncoding("utf8");
	user.on("error", function() {})
	user.on("close", function() {})

	user.on("data", function(data) {
		var userData = JSON.parse(data);
		console.log(userData.name + ": " + userData.message);

		for(var i = 0; i < users.length; i++) {
			users[i].write(JSON.stringify(userData));
		}
	})
}