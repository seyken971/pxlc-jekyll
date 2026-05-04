---
layout: default
body_class: stitch-site page-services
title: "Services | Pixels Caraïbes"
description: "Ateliers, accompagnements et formations numériques pour séniors, jeunes, professionnels et collectivités."
permalink: /services/
---

{% include site-header.html %}

<main>
  <section class="page-hero stitch-page-hero">
    <div>
      <h1>Des parcours numériques pour chaque profil.</h1>
      <p>Nous concevons des accompagnements accessibles pour réduire l'illectronisme, soutenir les usages professionnels et développer la confiance numérique.</p>
      <a class="button secondary" href="{{ '/contact/' | relative_url }}">Demander un devis</a>
    </div>
  </section>

  <section class="section">
    <div class="section-heading">
      <p class="section-label">Publics accompagnés</p>
      <h2>Des solutions pour chaque profil</h2>
    </div>
    <div class="audience-grid">
      <article class="audience-card">
        {% include icons.html name="elderly" %}
        <h3>Séniors & inclusion</h3>
        <p>Lutter contre l'illectronisme en douceur: communiquer avec ses proches, gérer ses démarches et sécuriser ses données.</p>
        <ul>
          <li>Initiation tablettes & smartphones</li>
          <li>Ateliers mémoire & jeux numériques</li>
        </ul>
      </article>
      <article class="audience-card">
        {% include icons.html name="code" %}
        <h3>Jeunesse & code</h3>
        <p>Éveiller les vocations numériques dès le plus jeune âge par la création, la logique et l'expérimentation.</p>
      </article>
      <article class="audience-card">
        {% include icons.html name="business_center" %}
        <h3>Professionnels</h3>
        <p>Accélérer la transformation digitale avec des outils collaboratifs, de la méthode et des bases de cybersécurité.</p>
      </article>
      <article class="audience-card featured">
        {% include icons.html name="account_balance" %}
        <h3>Collectivités & territoires</h3>
        <p>Déployer des politiques d'inclusion numérique à l'échelle locale: diagnostic territorial, ateliers et espaces publics numériques.</p>
        <a href="{{ '/contact/' | relative_url }}">Planifier un diagnostic</a>
      </article>
    </div>
  </section>

  <section class="section process-section">
    <div class="section-heading centered">
      <p class="section-label">Méthode</p>
      <h2>Comment nous travaillons</h2>
    </div>
    <ol class="process-grid">
      <li>
        <strong>01</strong>
        <p>Analyse précise des besoins et du niveau d'aisance numérique du public.</p>
      </li>
      <li>
        <strong>02</strong>
        <p>Création d'ateliers sur mesure avec des supports pédagogiques simples.</p>
      </li>
      <li>
        <strong>03</strong>
        <p>Animation en présentiel avec une approche bienveillante et participative.</p>
      </li>
      <li>
        <strong>04</strong>
        <p>Mesure de l'impact social et suivi des acquis des participants.</p>
      </li>
    </ol>
  </section>

  <section class="section">
    <div class="section-heading">
      <p class="section-label">Modules</p>
      <h2>Nos modules de formation</h2>
    </div>
    <div class="module-grid">
      <article>
        {% include icons.html name="security" %}
        <h3>Cybersécurité</h3>
        <p>Protéger ses comptes, identifier les tentatives de phishing et gérer ses mots de passe.</p>
      </article>
      <article>
        {% include icons.html name="psychology" %}
        <h3>Intelligence artificielle</h3>
        <p>Comprendre les enjeux de l'IA et apprendre à utiliser les outils pour gagner du temps.</p>
      </article>
      <article>
        {% include icons.html name="hub" %}
        <h3>Collaboration</h3>
        <p>Maîtriser les outils de travail à distance, de gestion de projet et de partage documentaire.</p>
      </article>
    </div>
  </section>

  <section class="section cta-panel">
    <h2>Prêt à franchir le pas numérique ?</h2>
    <p>Que vous soyez une mairie, une association ou une entreprise, nous construisons le format qui convient.</p>
    <a class="button primary" href="{{ '/contact/' | relative_url }}">Demander un devis</a>
  </section>
</main>

{% include site-footer.html %}
