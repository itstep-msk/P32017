class Bubblegum {
	constructor(options) {
		this._images = options.images;
		this._el = document.querySelector(options.el);
		this._width = null;
		this._height = null;
		this._container = null;
		this._count = 0;
		this._init();
	}

	next() {
		if(this._count >= this._images.length - 1) return false;

		this._count++;
		this._container.style.marginLeft = -(this._count * this._width) + "px";
	}

	prev() {
		if(this._count <= 0) return false;

		this._count--;
		this._container.style.marginLeft = -(this._count * this._width) + "px";
	}

	_createElement(type, className) {
		var el = document.createElement(type);

		el.classList.add(className);

		return el;
	}

	_setSliderWidth() {
		this._el.style.width = this._width + "px";
	}

	_setContainerWidth(el) {
		el.style.width = this._width * this._images.length + "px";
	}

	_createImageBox(el) {
		for(var i = 0; i < this._images.length; i++) {
			var image = this._createElement("img", "image");

			image.src = this._images[i];
			el.appendChild(image);
		}
	}

	_createContainer() {
		var container = this._createElement("div", "container");

		this._createImageBox(container);
		this._el.appendChild(container);
		this._setContainerWidth(container);

		return container;
	}

	_getImageWidth(callback) {
		var img = this._createElement("img", "null");

		img.src = this._images[0];
		this._el.appendChild(img);
		img.onload = handler.bind(this);

		function handler() {
			this._width = img.width;
			img.remove();
			callback.call(this);
		}
	}

	_init() {
		this._getImageWidth(callback);

		function callback() {	
			this._container = this._createContainer();
			this._setSliderWidth();
		}
	}
}