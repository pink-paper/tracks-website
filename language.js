(function () {
  'use strict';
  var key = 'tracks-language';
  var supported = ['en', 'de'];
  var lang = document.documentElement.lang;
  if (document.documentElement.dataset.languageEntry !== 'auto') {
    try { localStorage.setItem(key, lang); } catch (_) { /* Language links work without storage. */ }
    return;
  }
  var choice;
  try { choice = localStorage.getItem(key); } catch (_) { /* Fall back to browser languages. */ }
  if (supported.indexOf(choice) === -1) {
    choice = (navigator.languages || [navigator.language || 'en'])
      .map(function (value) { return value.toLowerCase().split('-')[0]; })
      .filter(function (value) { return supported.indexOf(value) !== -1; })[0] || 'en';
  }
  var base = new URL('./', window.location.href);
  var target = new URL(choice + '/', base);
  target.search = window.location.search;
  target.hash = window.location.hash;
  window.location.replace(target.href);
}());
