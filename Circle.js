class Circle {
	constructor(location) {
		this.location = location;
		this.size = 1;
	}

	update() {
		this.size += 1;
	}

	display() {
		stroke(0);
		fill(255);
		ellipse(this.location.x, this.location.y, this.size);
	}
}
