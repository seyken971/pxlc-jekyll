(function () {
  var header = document.querySelector("[data-header]");
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
    });
  }

  if (header) {
    var updateHeader = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 10);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  }
})();
