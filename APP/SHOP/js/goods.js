class Goods {
	constructor(container, card) {
		this._container = document.querySelector(container);
		this._card = document.querySelector(card).content.firstElementChild;
		this._goods = [];
		this._from = 0;
		this._to = 3;
		this._GOODS_COUNT = 4;
	}

	get range() {
		return {
			from: this._from,
			to: this._to
		}
	}

	add(data) {
		var goods = JSON.parse(data);

		this._goods = [];
		this._goods = this._goods.concat(goods);
		this._render();
		this._increment();
	}

	_increment() {
		this._from = this._to + 1;
		this._to = this._to + this._GOODS_COUNT;
	}

	_render() {
		for(var i = 0; i < this._goods.length; i++) {
			var card = this._card.cloneNode(true);
			var caption = card.querySelector(".js-caption");
			var price = card.querySelector(".js-price");

			caption.innerHTML = this._goods[i].caption;
			price.innerHTML = this._goods[i].price;

			this._container.appendChild(card);
		}
	}
}