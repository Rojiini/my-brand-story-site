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

// Native scroll snapping preserves swipe navigation even without JavaScript.
function initializeProductGalleries(root) {
  root.querySelectorAll('[data-product-gallery]').forEach(function (gallery) {
    if (gallery.dataset.galleryReady) return;
    var track = gallery.querySelector('[data-gallery-track]');
    if (!track) return;
    gallery.dataset.galleryReady = 'true';
    var slides = track.querySelectorAll('[data-gallery-slide]');
    var thumbs = gallery.querySelectorAll('[data-gallery-index]');
    var counter = gallery.querySelector('[data-gallery-count]');
    var index = 0;
    var frame;
    function update() {
      var distance = Infinity;
      var left = track.getBoundingClientRect().left;
      slides.forEach(function (slide, i) {
        var delta = Math.abs(slide.getBoundingClientRect().left - left);
        if (delta < distance) { distance = delta; index = i; }
      });
      if (counter) counter.textContent = (index + 1) + ' / ' + slides.length;
      thumbs.forEach(function (thumb, i) { thumb.setAttribute('aria-pressed', String(i === index)); });
    }
    function go(next) {
      var slide = slides[(next + slides.length) % slides.length];
      if (!slide) return;
      track.scrollBy({ left: slide.getBoundingClientRect().left - track.getBoundingClientRect().left, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }
    gallery.addEventListener('click', function (event) {
      if (event.target.closest('[data-gallery-prev]')) go(index - 1);
      if (event.target.closest('[data-gallery-next]')) go(index + 1);
      var thumb = event.target.closest('[data-gallery-index]');
      if (thumb) go(Number(thumb.dataset.galleryIndex));
    });
    gallery.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault(); go(index + (event.key === 'ArrowRight' ? 1 : -1));
      }
    });
    track.addEventListener('scroll', function () { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); }, { passive: true });
    window.addEventListener('resize', update);
    update();
  });
}
initializeProductGalleries(document);
document.addEventListener('shopify:section:load', function (event) { initializeProductGalleries(event.target); });
