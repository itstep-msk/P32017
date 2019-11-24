class BattleShipBot {
	constructor(mapWidth, mapHeight) {
		this._CELL_TYPES = {
			DESTROYED: 3,
			MISS: 4
		}
		this._mapWidth = mapWidth;
		this._mapHeight = mapHeight;
		this._map = this._createMap(this._mapWidth, this._mapHeight);
		this._directions = [];
		this._destruction = false;
	}

	move(callback) {
		var points = this._selectPoint();
		var result = callback(...points);

		if(result) {
			this._addPointToMap(...points, this._CELL_TYPES.DESTROYED);
			this._destruction = true;
		} else {
			this._addPointToMap(...points, this._CELL_TYPES.MISS);
		}

		if(!this._destruction) {
			this._selectDirection(...points);
		}
	}

	_selectDirection(i, j) {
		if(this._map[i - 1] && this._map[i - 1][j] === 0) this._directions.push("up");
		if(this._map[i + 1] && this._map[i + 1][j] === 0) this._directions.push("down");
		if(this._map[i][j + 1] === 0) this._directions.push("right");
		if(this._map[i][j - 1] === 0) this._directions.push("left");
	}

	_addPointToMap(i, j, type) {
		this._map[i][j] = type;
	}

	_createMap(width, height) {
		return Array.from(Array(width), () => new Array(height).fill(0));
	}
	_selectPoint() {
		var i = Math.floor(Math.random() * this._mapWidth);
		var j = Math.floor(Math.random() * this._mapHeight);

		if(this._checkPoint(i, j)) {
			return [i, j];
		} else {
			return this._selectPoint();
		}
	}

	_checkPoint(i, j) {
		return this._map[i][j] === 0 ? true : false;
	}
}