const circles = [];

function setup() {
	createCanvas(1024, 768);
}

function draw() {
	addCircle();

	circles.forEach(c => {
		c.checkEdges();
		c.update();
		c.display();
	});
}

function addCircle() {
	const x = random(0, width+1);
	const y = random(0, height+1);

	const location = createVector(x, y);
	circles.push(new Circle(location));
}
