var password = document.querySelector(".js-password");
var button = document.querySelector(".js-button");

button.addEventListener("click", handler);

function handler() {
	var pass = new Password(20).create();

	password.value = pass;
	chrome.tabs.executeScript({
   	 	code: `fillInputPassword("${pass}")`
  	});
}