/**
 * contacts.js — Assemblage anti-bot des coordonnées
 * Les adresses ne sont jamais en clair dans le HTML ;
 * elles sont construites ici en JS pour tromper les scrapers.
 */
(function () {
  var u = "contact";
  var d = "pxlc" + "." + "fr";
  var email = u + "@" + d;

  // Email — tous les liens #mailLink, #mailLink2, #mailLink3
  ["mailLink", "mailLink2", "mailLink3"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.textContent = email;
      el.href = "mailto:" + email;
    }
  });

  // WhatsApp
  var waNumber = "590" + "690" + "717" + "618";
  var waDisplay = "0690 71 76 18";
  var waEl = document.getElementById("waLink");
  if (waEl) {
    waEl.textContent = waDisplay;
    waEl.href = "https://wa.me/" + waNumber;
  }
})();
