var Event = require("events");
var event = new Event;

// Прослушивание события
event.on("fruit", function(data) {
	console.log(data) // "Яблоко"
})

// Генерирование события
event.emit("fruit", "Яблоко");