var restartButton = document.getElementById("restart");
restartButton.addEventListener('click', function(){
	game = new Game(new NeuralNetwork());
	loop();
});