---
layout: post
title: Snake
date: 2015-03-15 16:40:16
description: A Snake game
tags: neuroevolution
categories: sample-posts
---

<div id="navbar" style="margin-bottom:1rem;">
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Snake Game with AI</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#snakeNav" aria-controls="snakeNav" aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="snakeNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="https://www.andreapollastro.it" target="_blank" rel="noopener">
            Home
          </a>
        </li>
        <li class="nav-item">
          <button type="button" id="restart" class="btn btn-light ml-2">Restart</button>
        </li>
      </ul>
    </div>
  </nav>
</div>

<div id="sketch-holder"></div>

<!-- p5.js libraries -->
<script src="{{ '/assets/snake_neuroevolution/libraries/p5.js' | relative_url }}"></script>
<script src="{{ '/assets/snake_neuroevolution/libraries/p5.dom.js' | relative_url }}"></script>
<script src="{{ '/assets/snake_neuroevolution/libraries/p5.sound.js' | relative_url }}"></script>

<!-- your game scripts (keep this order) -->
<script src="{{ '/assets/snake_neuroevolution/sketch.js' | relative_url }}"></script>
<script src="{{ '/assets/snake_neuroevolution/snake.js' | relative_url }}"></script>
<script src="{{ '/assets/snake_neuroevolution/game.js' | relative_url }}"></script>
<script src="{{ '/assets/snake_neuroevolution/neuralnetwork.js' | relative_url }}"></script>
<script src="{{ '/assets/snake_neuroevolution/population.js' | relative_url }}"></script>
<script src="{{ '/assets/snake_neuroevolution/interface.js' | relative_url }}"></script>

