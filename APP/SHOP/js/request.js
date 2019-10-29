class Request {
	send(url, params, callback) {
		var xhr = new XMLHttpRequest;
		var query = url + "/?" + this._serialize(params);

		xhr.onreadystatechange = function() {
			if(xhr.status === 200 && xhr.readyState === 4) {
				callback(xhr.responseText);
			}
		}

		xhr.open("GET", query);
		xhr.send();
	}

	_serialize(data) {
		var result = "";

		for(var key in data) {
			result += `${key}=${data[key]}&`;
		}

		return result.slice(0,-1);
	}
}