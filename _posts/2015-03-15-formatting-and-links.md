---
layout: post
title: Snake
date: 2015-03-15 16:40:16
description: A Snake game
tags: neuroevolution
categories: sample-posts
---

<p>Here’s a simple interactive JavaScript example:</p>

<div id="demo" style="padding:1em; border:1px solid #ccc;"></div>
{% raw %}
<script>
  const box = document.getElementById("demo");
  let count = 0;
  box.textContent = "Click me!";
  box.addEventListener("click", () => {
    count++;
    box.textContent = `You clicked ${count} time${count !== 1 ? "s" : ""}!`;
  });
</script>
{% endraw %}
