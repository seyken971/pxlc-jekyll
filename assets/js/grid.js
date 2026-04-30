/**
 * grid.js — Génère la grille de pixels animés (page d'accueil uniquement)
 */
(function () {
  var colors = [
    "#1565C0", "#1E88E5", "#1976D2", "#90CAF9",
    "#4A148C", "#7B1FA2", "#5C6BC0", "#CE93D8",
    "#B71C1C", "#E53935", "#C62828", "#AD1457",
    "#6A1B9A", "#0e0c1e", "#16132e",
  ];
  var grid = document.getElementById("gridBg");
  if (!grid) return;
  for (var i = 0; i < 18 * 10; i++) {
    var s = document.createElement("span");
    s.style.background = colors[Math.floor(Math.random() * colors.length)];
    s.style.setProperty("--d", (3 + Math.random() * 5).toFixed(1) + "s");
    s.style.setProperty("--delay", (Math.random() * 4).toFixed(1) + "s");
    grid.appendChild(s);
  }
})();
