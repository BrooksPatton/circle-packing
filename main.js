let circle;
function setup() {
	createCanvas(1024, 768);
	const location = createVector(width/2, height/2);
	circle = new Circle(location);
}

function draw() {
	circle.update();
	circle.display();
}
