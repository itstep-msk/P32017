function User(name) {
	this._name = name;
}

User.prototype.getName = function() {
	return this._name;
}

module.exports = User;