/* global bootstrap: false */
(() => {
  'use strict'
  const selectors = '[data-bs-toggle="tooltip"], [data-bs-toggle-alt="tooltip"]';

  const tooltipTriggerList = Array.from(document.querySelectorAll(selectors));

  tooltipTriggerList.forEach(tooltipTriggerEl => {
    var tooltip = new bootstrap.Tooltip(tooltipTriggerEl);
    tooltipTriggerEl.addEventListener('click', function (event) {
      if (event.target.tagName.toLowerCase() === 'a') {
        tooltip.hide();
      }
    });
  });
})();