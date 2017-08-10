const circles = [];

function setup() {
	createCanvas(1024, 768);
}

function draw() {
	addCircle();
	checkIfTouchingAnotherCircle();

	circles.forEach(c => {
		c.checkEdges();
		c.update();
		c.display();
	});
}

function addCircle() {
	const x = random(0, width+1);
	const y = random(0, height+1);
	const color = getRandomColor();

	const location = createVector(x, y);
	if(!insideAnotherCircle(location)) {
		circles.push(new Circle(location, color));
	}
}

function insideAnotherCircle(location) {
	for(let i = 0; i < circles.length; i++) {
		const c = circles[i];
		if(dist(location.x, location.y, c.location.x, c.location.y) < c.size) {
			return true;
		}
	}
}

function checkIfTouchingAnotherCircle() {
	for(let i = 0; i < circles.length; i++) {
		const circle = circles[i];
		if(circle.growing) {
			for(let j = 0; j < circles.length; j++) {
				const other = circles[j];
				if(i !== j) {
					const d = dist(circle.location.x, circle.location.y, other.location.x, other.location.y);
					const size = (circle.size / 2) + (other.size / 2);

					if(d - 2 < size) {
						circle.growing = false;
						break;
					}
				}
			}
		}
	}
}

function getRandomColor() {
	const color = {
		r: random(0, 256),
		g: random(0, 256),
		b: random(0, 256)
	};

	return color;
}
