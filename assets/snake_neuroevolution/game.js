function Game(NN){    
    this.generateFood = function(){
        let available = [];
        let k = 0;
        b = CANVAS_DIMENSION_SNAKE/RESOLUTION;
        for(let i = 1; i < b-1; i++){
            for(let j = 1; j < b-1; j++){
                skip = false;
                for(let b = 0; b < this.snake.body.length; b++){
                    ii = this.snake.body[b][0];
                    jj = this.snake.body[b][1];
                    if(ii == i && jj == j){
                        skip = true;
                        break;
                    }
                }
                if(!skip)
                    available[k++] = [i,j];
            }
        }
        available = shuffle(available);
        return available[0];
    }
    this.getBrain = function(){
        return this.brain;
    }
    this.update = function(){
        if(!this.endGame){
            snake_state = this.snake.update()
            switch(snake_state){
                case IS_DEAD:
                    this.endGame = true;
                    break;
                case FOOD_WAS_EATEN:
                    this.apples++;
                    this.maxSteps += BASE_MAX_STEPS;
                    this.food = this.generateFood();
                    this.snake.setFood(this.food);
            }
            this.steps++;
            if(this.food == undefined || this.steps == this.maxSteps){
                this.endGame = true;
                return;
            }
        }
    }
    this.drawFood = function(){
        fill(200,0,0);
        rect(this.food[1]*RESOLUTION, this.food[0]*RESOLUTION, RESOLUTION, RESOLUTION);
    }
    this.drawBorder = function(){
        fill(30);
        noStroke();
        let b = CANVAS_DIMENSION_SNAKE/RESOLUTION;
        for(let i = 0; i < b; i++){
            rect(i*RESOLUTION, 0, RESOLUTION, RESOLUTION);
            rect(0, i*RESOLUTION, RESOLUTION, RESOLUTION);
            rect(i*RESOLUTION, (b-1)*RESOLUTION, RESOLUTION, RESOLUTION);
            rect((b-1)*RESOLUTION, i*RESOLUTION, RESOLUTION, RESOLUTION);
        }
    }
    this.drawGame = function(){
        /* drawing */
        background(255);
        this.drawBorder();
        this.snake.drawSnake();
        if(this.food != undefined)
            this.drawFood();
        this.printStatistics();
        if(this.endGame){
            fill(255,0,0);
            text("GAME OVER", CANVAS_DIMENSION_SNAKE/2-32, CANVAS_DIMENSION_SNAKE/2);
            noLoop();   
        }
    }
    this.printStatistics = function(){
        noStroke();
        s = "steps: " + this.steps;
        text(s, RESOLUTION + 10, RESOLUTION + 15);
        s = "apples: " + this.apples;
        text(s, RESOLUTION + 10, RESOLUTION + 30);
    }
    this.getSnakeSize = function(){
        return this.snake.getSize();
    }
    this.getApples = function(){
        return this.apples;
    }
    this.getSnake = function(){
        return this.snake;
    }

    this.steps = 0;
    this.apples = 0;
    this.brain = NN;
    this.maxSteps = BASE_MAX_STEPS;
    this.snake = new Snake([(CANVAS_DIMENSION_SNAKE/2)/RESOLUTION, (CANVAS_DIMENSION_SNAKE/2)/RESOLUTION], this.brain);
    this.endGame = false;
    this.food = this.generateFood();
    this.snake.setFood(this.food);
}