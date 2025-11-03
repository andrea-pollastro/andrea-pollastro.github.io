---
layout: post
title: Snake
date: 2015-03-15 16:40:16
description: A Snake game
tags: neuroevolution
categories: sample-posts
---

<!-- Make all relative URLs (CSV, images) resolve under /assets/snake_neuroevolution/ -->
<base href="{{ '/assets/snake_neuroevolution/' | relative_url }}">

<!-- Where the p5 canvas will be attached -->
<div id="sketch-holder"></div>

{% raw %}
<!-- Libraries -->
<script src="{{ '/assets/snake_neuroevolution/libraries/p5.js' | relative_url }}"></script>
<script src="{{ '/assets/snake_neuroevolution/libraries/p5.dom.js' | relative_url }}"></script>
<script src="{{ '/assets/snake_neuroevolution/libraries/p5.sound.js' | relative_url }}"></script>

<!-- Your game scripts (keep this order) -->
<script src="{{ '/assets/snake_neuroevolution/sketch.js' | relative_url }}"></script>
<script src="{{ '/assets/snake_neuroevolution/snake.js' | relative_url }}"></script>
<script src="{{ '/assets/snake_neuroevolution/game.js' | relative_url }}"></script>
<script src="{{ '/assets/snake_neuroevolution/neuralnetwork.js' | relative_url }}"></script>
<script src="{{ '/assets/snake_neuroevolution/population.js' | relative_url }}"></script>
<script src="{{ '/assets/snake_neuroevolution/interface.js' | relative_url }}"></script>
{% endraw %}
