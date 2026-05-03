---
layout: default
body_class: stitch-site page-contact
title: "Contact | Pixels Caraïbes"
description: "Contactez Pixels Caraïbes pour un atelier, un accompagnement ou une formation numérique en Guadeloupe."
permalink: /contact/
---

{% include site-header.html %}

<main>
  <section class="page-hero contact-hero">
    <div>
      <h1>Parlons de vos projets numériques.</h1>
      <p>Décrivez votre public, votre objectif et ce qui bloque aujourd'hui. Nous vous répondrons avec une proposition claire.</p>
    </div>
  </section>

  <section class="section contact-layout">
    <form class="contact-form" action="#" method="post" data-contact-form>
      <div class="field-grid">
        <label>
          <span>Nom complet</span>
          <input name="name" autocomplete="name" placeholder="Votre nom" required>
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autocomplete="email" placeholder="vous@exemple.fr" required>
        </label>
      </div>
      <label>
        <span>Sujet</span>
        <input name="subject" placeholder="Quelle est votre idée ?" required>
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" rows="6" placeholder="Votre message ici..." required></textarea>
      </label>
      <button class="button primary" type="submit">
        Envoyer le message
        <span class="material-symbols-outlined" aria-hidden="true">send</span>
      </button>
    </form>

    <aside class="contact-card">
      <h2>Coordonnées</h2>
      <div class="contact-row">
        <span class="material-symbols-outlined" aria-hidden="true">mail</span>
        <div>
          <p>Email</p>
          <a id="mailLink" href="#">…</a>
        </div>
      </div>
      <div class="contact-row">
        <span class="material-symbols-outlined" aria-hidden="true">call</span>
        <div>
          <p>WhatsApp</p>
          <a id="waLink" href="#">…</a>
        </div>
      </div>
      <div class="contact-row">
        <span class="material-symbols-outlined" aria-hidden="true">location_on</span>
        <div>
          <p>Zone d'intervention</p>
          <strong>Guadeloupe</strong>
        </div>
      </div>
    </aside>
  </section>
</main>

{% include site-footer.html %}
