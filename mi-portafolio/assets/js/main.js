(() => {
  'use strict';
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#menu');
  const mobile = window.matchMedia('(max-width: 760px)');
  if (toggle && menu) {
    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      menu.dataset.collapsed = String(mobile.matches && !open);
      toggle.querySelector('span').textContent = open ? '−' : '+';
    };
    const sync = () => {
      toggle.hidden = !mobile.matches;
      setOpen(false);
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', (event) => {
      if (event.target.closest('a') && mobile.matches) {
        setOpen(false);
        toggle.focus({ preventScroll: true });
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
    mobile.addEventListener('change', sync);
    sync();
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
