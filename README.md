# pxlc — Site Jekyll

Site statique Jekyll pour pxlc.fr, déployable sur GitHub Pages.

## Structure du projet

```
pxlc-jekyll/
├── _config.yml              ← Paramètres globaux du site (auteur, URL…)
├── _layouts/
│   └── default.html         ← Mise en page partagée par toutes les pages
├── assets/
│   ├── css/
│   │   └── main.css         ← Styles globaux (accueil + mentions légales)
│   └── js/
│       ├── contacts.js      ← Anti-bot : assemble email & WhatsApp en JS
│       └── grid.js          ← Grille de pixels animés (accueil uniquement)
├── index.html               ← Page d'accueil
├── mentions-legales/
│   └── index.html           ← Page mentions légales → /mentions-legales/
├── Gemfile
└── README.md
```

## Lancer en local

```bash
bundle install
bundle exec jekyll serve
# → http://localhost:4000
```

## Déployer sur GitHub Pages

1. Pusher ce dépôt sur GitHub
2. Dans les Settings du dépôt → Pages → Source : `main` branch, `/ (root)`
3. GitHub Pages détecte Jekyll automatiquement et génère le site

## Modifier les infos de contact

Toutes les données sensibles sont centralisées dans `_config.yml` :

```yaml
author:
  name: "Andy Zébus"
  siren: "813 793 528"
  wa_display: "0690 71 76 18"
  linkedin: "https://www.linkedin.com/in/azebus"
  address:
    city: "Les Abymes"
    # …
```

L'email n'est **jamais** en clair dans le HTML — il est assemblé par `contacts.js`
pour éviter le scraping des bots.
