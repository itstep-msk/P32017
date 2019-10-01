var User = require("./user.js");
var alex = new User("alex");
var bob = new User("bob");

console.log(User.toString()) // Тело функции
console.log(alex.getName())
console.log(bob.getName())