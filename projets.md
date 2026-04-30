---
title: Projets
permalink: /projets/
kicker: Références
description: Exemples de formats de projets que PXLC peut produire ou accompagner.
---

<div class="project-grid">
  {% assign projects = site.projects | sort: "year" | reverse %}
  {% for project in projects %}
    <a class="project-card" href="{{ project.url | relative_url }}">
      <span>{{ project.category }}</span>
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
    </a>
  {% endfor %}
</div>
