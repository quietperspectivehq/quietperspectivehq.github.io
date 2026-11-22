/* Small progressive enhancement: keep the footer year current. */
(() => {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
})();
