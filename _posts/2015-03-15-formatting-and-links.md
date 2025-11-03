---
layout: post
title: Snake
date: 2015-03-15 16:40:16
description: A Snake game
tags: neuroevolution
categories: sample-posts
---

<div class="d-flex justify-content-end mb-3">
  <button id="restart" class="btn btn-sm btn-outline-primary">Restart</button>
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

