(function () {
  var root = document.documentElement;

  function store(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {}
  }

  function currentLang() {
    return root.dataset.lang === "ru" ? "ru" : "en";
  }

  function updateThemeLabel() {
    var isDark = root.dataset.theme === "dark";
    var label =
      currentLang() === "en"
        ? isDark
          ? "Switch to light theme"
          : "Switch to dark theme"
        : isDark
        ? "Включить светлую тему"
        : "Включить тёмную тему";
    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
    });
  }

  function setLang(lang) {
    root.dataset.lang = lang;
    root.setAttribute("lang", lang);
    store("lang", lang);
    document.querySelectorAll("[data-lang-toggle]").forEach(function (button) {
      var label = button.querySelector("[data-lang-label]");
      var text = lang === "en" ? "RU" : "EN";
      if (label) {
        label.textContent = text;
      } else {
        button.textContent = text;
      }
    });
    updateThemeLabel();
  }

  function setTheme(theme) {
    root.dataset.theme = theme;
    store("theme", theme);
    updateThemeLabel();
  }

  var params = new URLSearchParams(location.search);
  var savedLang = null;
  try {
    savedLang = localStorage.getItem("lang");
  } catch (e) {}
  var lang = params.get("lang") || savedLang || root.dataset.lang || "en";
  setLang(lang === "ru" ? "ru" : "en");

  if (root.dataset.theme !== "light" && root.dataset.theme !== "dark") {
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  } else {
    updateThemeLabel();
  }

  document.addEventListener("click", function (event) {
    var themeButton = event.target.closest("[data-theme-toggle]");
    if (themeButton) {
      setTheme(root.dataset.theme === "dark" ? "light" : "dark");
      return;
    }

    var langButton = event.target.closest("[data-lang-toggle]");
    if (langButton) {
      setLang(currentLang() === "en" ? "ru" : "en");
    }
  });

  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));

  if (sections.length && links.length) {
    var highlight = function () {
      var position = window.scrollY + 140;
      var current = "";
      sections.forEach(function (section) {
        if (position >= section.offsetTop) current = section.id;
      });
      links.forEach(function (link) {
        link.classList.toggle("active", link.getAttribute("href") === "#" + current);
      });
    };
    window.addEventListener("scroll", highlight, { passive: true });
    highlight();
  }
})();
