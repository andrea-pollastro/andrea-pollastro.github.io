---
layout: post
title: Snake
date: 2015-03-15 16:40:16
description: A Snake game
tags: neuroevolution
categories: sample-posts
---

<link href="{{ '/assets/snake_neuroevolution/style.css' | relative_url }}" rel="stylesheet">

<div id="navbar" style="margin-bottom:1rem;">
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Snake Game with AI</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#snakeNav"
            aria-controls="snakeNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="snakeNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <button type="button" id="restart" class="btn btn-light">Restart</button>
        </li>
      </ul>
    </div>
  </nav>
</div>

<div id="sketch-holder"></div>

<div id="explanation" class="jumbotron" style="margin-top:1rem;">
  <div id="text_area">
    <h1 class="display-4">Snake Game with AI</h1>
    <p class="lead">A <i>Snake Game</i> with AI built using a Feed-Forward Neural Network trained with a Genetic Algorithm.</p>
    <hr class="my-4">
    <p>As you can notice from the animation, the Neural Network has one Input Layer with 25 neurons,
      two Hidden Layers with 16 and 8 neurons, and one Output Layer with 4 neurons.</p>
    <p>Input values: the snake looks in 8 directions. For each direction it sees distance to wall and presence of apple/body.
      That’s 3 values × 8 directions = 24 inputs. The 25th input is body length.</p>
    <p>Outputs are four actions: left (L), down (D), right (R), up (U).</p>
    <p>Fitness:
      \[
        f(apples, steps_c, steps_f) = e^{apples} + 0.05\cdot steps_c - 0.1\cdot steps_f
      \]
      where \(steps_c\) are steps toward apples and \(steps_f\) are steps away. Distances use Euclidean metric.
    </p>
    <p>Selection via Roulette Wheel; mutation rate \(0.005\%\).</p>
    <p>Source: <a href="https://github.com/andrea-pollastro/snakegameusingai" target="_blank" rel="noopener">github.com/andrea-pollastro/snakegameusingai</a></p>
  </div>
</div>

{% raw %}
<script src="{{ '/assets/snake_neuroevolution/libraries/p5.js' | relative_url }}"></script>
<script src="{{ '/assets/snake_neuroevolution/libraries/p5.dom.js' | relative_url }}"></script>
<script src="{{ '/assets/snake_neuroevolution/libraries/p5.sound.js' | relative_url }}"></script>

<!-- Your game scripts (order preserved from your index.html) -->
<script src="{{ '/assets/snake_neuroevolution/sketch.js' | relative_url }}"></script>
<script src="{{ '/assets/snake_neuroevolution/snake.js' | relative_url }}"></script>
<script src="{{ '/assets/snake_neuroevolution/game.js' | relative_url }}"></script>
<script src="{{ '/assets/snake_neuroevolution/neuralnetwork.js' | relative_url }}"></script>
<script src="{{ '/assets/snake_neuroevolution/population.js' | relative_url }}"></script>
<script src="{{ '/assets/snake_neuroevolution/interface.js' | relative_url }}"></script>
{% endraw %}
