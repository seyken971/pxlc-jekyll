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

  // Theme toggle
  var themeToggle = document.querySelector("[data-theme-toggle]");
  if (themeToggle) {
    var themeIcon = themeToggle.querySelector(".material-symbols-outlined");

    function getEffectiveTheme() {
      var saved = localStorage.getItem("pxlc-theme");
      if (saved) return saved;
      return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }

    function applyThemeUI(theme) {
      if (themeIcon) {
        themeIcon.textContent = theme === "light" ? "dark_mode" : "light_mode";
      }
      themeToggle.setAttribute(
        "aria-label",
        theme === "light" ? "Passer en mode sombre" : "Passer en mode clair"
      );
      document.querySelectorAll('meta[name="theme-color"]').forEach(function (m) {
        m.content = theme === "light" ? "#f0f8fb" : "#00161f";
      });
    }

    applyThemeUI(getEffectiveTheme());

    themeToggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme") ||
        (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
      var next = current === "dark" ? "light" : "dark";
      localStorage.setItem("pxlc-theme", next);
      document.documentElement.setAttribute("data-theme", next);
      applyThemeUI(next);
    });

    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", function (e) {
      if (!localStorage.getItem("pxlc-theme")) {
        applyThemeUI(e.matches ? "light" : "dark");
      }
    });
  }

  var contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(contactForm);
      var email = "contact" + "@" + "pxlc" + "." + "fr";
      var subject = data.get("subject") || "Demande de contact";
      var body = [
        "Nom : " + (data.get("name") || ""),
        "Email : " + (data.get("email") || ""),
        "",
        data.get("message") || ""
      ].join("\n");

      window.location.href = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }
})();
