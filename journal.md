---
layout: default
body_class: stitch-site page-news
title: "Actualités | Pixels Caraïbes"
description: "Conseils, annonces et notes de terrain autour de la médiation numérique."
permalink: /actualites/
---

{% include site-header.html %}

<main>
  <section class="page-hero stitch-page-hero">
    <div>
      <h1>Actualités et conseils numériques.</h1>
      <p>Retrouvez des notes pratiques sur la médiation numérique, les sites statiques, l'accessibilité et la maintenance web.</p>
    </div>
  </section>

  <section class="section news-list">
    {% for post in site.posts %}
      <a class="news-card" href="{{ post.url | relative_url }}">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d/%m/%Y" }}</time>
        <h2>{{ post.title }}</h2>
        {% if post.description %}
          <p>{{ post.description }}</p>
        {% endif %}
        <span>Lire l'article</span>
      </a>
    {% endfor %}
  </section>
</main>

{% include site-footer.html %}
