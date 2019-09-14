var fs = require("fs");

/*
fs.writeFile("filename", "данные", "utf8", function() {
	информация об успешной записи в файл
})
fs.writeFileSync("filename", "данные", "utf8");

fs.readFile("filename", "utf8", function(data) {
	data - содержимое файла
})
var file = fs.readFileSync("filename", "utf8");
*/

fs.writeFile("async.txt", "hello async world", "utf8", function(){});
fs.writeFileSync("sync.txt", "hello sync world", "utf8");

fs.readFile("async.txt", "utf8", function(err, data) {
	console.log(data);
})

var file = fs.readFileSync("sync.txt", "utf8");
console.log(file)
console.log(process.argv)