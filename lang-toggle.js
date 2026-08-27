/*
  BOQUILA — language toggle.
  Default language is Spanish. Choice is remembered per browser via
  localStorage so it persists across pages within the same visit.
  Markup convention: wrap Spanish copy in [data-es], English in [data-en].
  Structural chrome that has no translation (e.g. an image caption you
  intend to write once) needs no attribute and always shows.
*/

(function () {
  var STORAGE_KEY = "boquila-lang";
  var DEFAULT_LANG = "es";

  function getLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    } catch (e) {
      return DEFAULT_LANG;
    }
  }

  function setLang(lang) {
    document.documentElement.setAttribute("data-lang", lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage unavailable — toggle still works for this page view */
    }
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang-btn") === lang);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setLang(getLang());
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang-btn"));
      });
    });
  });
})();
