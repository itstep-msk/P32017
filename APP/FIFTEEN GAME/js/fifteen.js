class Fifteen {
	constructor(options) {
		this._field = document.querySelector(options.el);
		this._map = options.map;
		this._init();
	}

	_createCell() {
		var cell = document.createElement("div");

		cell.classList.add("cell");

		return cell;
	}

	_createField() {
		for(var i = 0; i < this._map.length; i++) {
			for(var j = 0; j < this._map[i].length; j++) {
				var cell = this._createCell();

				if(this._map[i][j] === 0) {
					cell.classList.add("empty");
				}

				cell.setAttribute("i", i);
				cell.setAttribute("j", j);
				cell.innerHTML = this._map[i][j];
				this._field.appendChild(cell);
			}
		}
	}

	_handlerClick(e) {
		console.log(e.target)
	}

	_init() {
		this._createField();
		this._field.addEventListener("click", this._handlerClick.bind(this));
	}
}