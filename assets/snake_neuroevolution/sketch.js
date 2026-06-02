const RESOLUTION = 40;
const RESOLUTION_NEURALNETWORK = 20;
const CANVAS_DIMENSION_SNAKE = 400;
const CANVAS_DIMENSION_NEURALNETWORK = 500;
const OFFSET = 50;

const IS_DEAD = 0;
const IS_ALIVE = 1;
const FOOD_WAS_EATEN = 2;

const BASE_MAX_STEPS = 100;
var game;

function setup() {
	if(windowWidth >= 950)
		canvas = createCanvas(CANVAS_DIMENSION_SNAKE + CANVAS_DIMENSION_NEURALNETWORK + OFFSET,CANVAS_DIMENSION_SNAKE);
	else
		canvas = createCanvas(OFFSET*2 + CANVAS_DIMENSION_SNAKE,CANVAS_DIMENSION_SNAKE + CANVAS_DIMENSION_NEURALNETWORK/1.5);
	canvas.parent("sketch-holder");
	game = new Game(new NeuralNetwork());
}
function draw() {
	game.update();
	if(windowWidth < 950){
		push();
		translate(OFFSET, 0);
		game.drawGame();
		pop();
		push();
		translate(10, CANVAS_DIMENSION_SNAKE+40);
		game.snake.brain.drawNeuralNetwork();
		pop();
	}
	else{
		game.drawGame();
		push();
		translate(CANVAS_DIMENSION_SNAKE+OFFSET,CANVAS_DIMENSION_SNAKE/8);
		game.snake.brain.drawNeuralNetwork();
		pop();
	}
	frameRate(10);
}

function windowResized() {
	if(windowWidth >= 950)
		resizeCanvas(CANVAS_DIMENSION_SNAKE + CANVAS_DIMENSION_NEURALNETWORK + OFFSET,CANVAS_DIMENSION_SNAKE);
	else
		resizeCanvas(OFFSET*2 + CANVAS_DIMENSION_SNAKE,CANVAS_DIMENSION_SNAKE + CANVAS_DIMENSION_NEURALNETWORK);
}