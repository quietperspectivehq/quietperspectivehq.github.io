// The footer year updates automatically. Social links are kept in index.html
// so that every destination is easy to review and edit without JavaScript.
(() => {
  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();
})();
