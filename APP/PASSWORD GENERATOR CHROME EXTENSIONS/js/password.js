class Password {
	constructor(length) {
		this._length = length;
	}

	create() {
		var result = [];
		
		for(var i = 0; i < this._length; i++) {
			result.push(this._getSymbol());
		}

		return result.join("");
	}

	_getSymbol() {
		var max = 122;
		var min = 35;
		var symbol = String.fromCharCode(Math.floor(Math.random()*(max - min) + min))

		return symbol;
	}
}