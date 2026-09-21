document.addEventListener('click', function (e) {
  var toggle = e.target.closest('.nav-toggle');
  if (!toggle) return;
  var nav = document.getElementById('mobile-nav');
  if (!nav) return;
  var open = nav.hasAttribute('hidden');
  if (open) { nav.removeAttribute('hidden'); } else { nav.setAttribute('hidden', ''); }
  toggle.setAttribute('aria-expanded', String(open));
});

// Product page: keep the displayed price in sync with the selected variant.
document.addEventListener('change', function (e) {
  var input = e.target.closest('[data-variant-input]');
  if (!input) return;
  var price = document.querySelector('[data-variant-price]');
  if (price && input.dataset.price) price.textContent = input.dataset.price;
});
