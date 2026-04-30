---
title: Journal
permalink: /journal/
kicker: Notes
description: Notes courtes sur la médiation numérique, Jekyll, GitHub Pages et la maintenance web.
---

<div class="post-list">
  {% for post in site.posts %}
    <a class="post-row" href="{{ post.url | relative_url }}">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d/%m/%Y" }}</time>
      <span>{{ post.title }}</span>
    </a>
  {% endfor %}
</div>
