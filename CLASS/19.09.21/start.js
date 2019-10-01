// Основное направление node.js
// Асинхронное выполнение кода

var os = require("os");
var fs = require("fs");

// console.log(os)
// console.log(os.userInfo())
// console.log(os.totalmem())

// fs.readFile("Путь", "Кодировка", f(){ доступ к файлу })
// fs.readFileSync("Путь", "Кодировка")

// fs.writeFile("Путь", "данные", "Кодировка");
// fs.writeFileSync("Путь", "данные", "Кодировка");

var file = fs.readFileSync("fruits.txt", "utf8");
console.log("Sync: " + file);

// readFile - ничего не возвращает!!!
fs.readFile("fruits.txt", "utf8", function(error, data) {
	if(error) { /**/ }

	console.log("Async: " + data);
})

fs.writeFileSync("fruits.txt", "orange = 100");

fs.writeFile("fruits.txt", "banana = 1000", function() {

});

//

var g = require("./greeting.js");
console.log(g) // [Function: greeting]
console.log(g()) // "Hello world"