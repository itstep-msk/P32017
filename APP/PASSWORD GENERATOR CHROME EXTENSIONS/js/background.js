function fillInputPassword(password) {
	var elements = document.querySelectorAll("input[type='password']");

	for(var i = 0; i < elements.length; i++) {
		elements[i].value = password;
	}
}