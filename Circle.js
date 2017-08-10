class Circle {
	constructor(location, color) {
		this.location = location;
		this.size = 1;
		this.growing = true;
		this.red = color.r;
		this.blue = color.b;
		this.green = color.g;
	}

	update() {
		if(this.growing) {
			this.size += 1;
		}
	}

	display() {
		stroke(0);
		fill(this.red, this.green, this.blue);
		ellipse(this.location.x, this.location.y, this.size);
	}

	checkEdges() {
		if(this.location.x - (this.size / 2) <= 0 || this.location.x + (this.size / 2) >= width || this.location.y - (this.size / 2) <=0 || this.location.y + (this.size / 2) >= height) {
			this.growing = false;
		}
	}
}
