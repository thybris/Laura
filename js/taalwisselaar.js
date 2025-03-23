// Detecteer huidige pagina pad
const path = window.location.pathname;

// Haal bestandsnaam op
const filename = path.substring(path.lastIndexOf('/') + 1);

// Kijk of we in 'banner' of 'welkom' zitten
let subdir = '';
if (path.includes('/banner/')) subdir = 'banner/';
else if (path.includes('/welkom/')) subdir = 'welkom/';

// Bouw links op per taal
const langLinks = {
  nl: '/' + subdir + filename,
  en: '/Overige talen/Engels/' + subdir + filename,
  fr: '/Overige talen/Frans/' + subdir + filename,
  es: '/Overige talen/Spaans/' + subdir + filename,
};

// Zet links op de elementen
document.addEventListener('DOMContentLoaded', () => {
  const nl = document.getElementById('lang-nl');
  const en = document.getElementById('lang-en');
  const fr = document.getElementById('lang-fr');
  const es = document.getElementById('lang-es');

  if (nl) nl.href = langLinks.nl;
  if (en) en.href = langLinks.en;
  if (fr) fr.href = langLinks.fr;
  if (es) es.href = langLinks.es;
});
