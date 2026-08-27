// ==UserScript==
// @name         Reliance SelectionApp -> StoneProfits Ship To Paste
// @namespace    reliance-selectionapp
// @version      1.0
// @description  Adds a "Paste Ship To" button on StoneProfits that fills Job Name, Address, Suite, City, State, Zip, Phone, and Email from data copied via the SelectionApp's "Copy for StoneProfits" button.
// @match        https://reliancegranite.stoneprofits.com/cOpportunity.aspx*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const FIELD_MAP = {
    jobName: 'dbJobName',
    address: 'dbShipToAddress',
    suite: 'dbShipToAddress2',
    city: 'dbShipToCity',
    state: 'dbShipToState',
    zip: 'dbShipToZip',
    phone: 'dbShipToPhone1',
    email: 'dbShipToEmail',
  };

  // Zip is filled last: its onblur handler (getTaxFunction) looks up sales tax
  // and likely depends on State already being on the page.
  const FILL_ORDER = ['jobName', 'address', 'suite', 'city', 'state', 'zip', 'phone', 'email'];

  function fillField(id, value) {
    const el = document.getElementById(id);
    if (!el) return false;
    el.value = value;
    // StoneProfits binds validation/formatting via inline onblur="..." attributes
    // (e.g. Blur(this), getTaxFunction()) which only fire on a real blur event.
    // Setting .value alone skips them, so invoke the handler directly.
    if (typeof el.onblur === 'function') {
      el.onblur();
    }
    return true;
  }

  async function pasteAll() {
    let text;
    try {
      text = await navigator.clipboard.readText();
    } catch (err) {
      alert('Could not read clipboard. Click anywhere on the page once, then try again.');
      return;
    }

    let data;
    try {
      data = JSON.parse(text);
    } catch (err) {
      alert('Clipboard does not contain SelectionApp Ship To data. Use "Copy for StoneProfits" in the SelectionApp first.');
      return;
    }

    if (!data || data.__source !== 'reliance-selectionapp-shipto') {
      alert('Clipboard data is not from the SelectionApp "Copy for StoneProfits" button.');
      return;
    }

    const missing = [];
    for (const key of FILL_ORDER) {
      const id = FIELD_MAP[key];
      const ok = fillField(id, data[key] || '');
      if (!ok) missing.push(id);
    }

    if (missing.length) {
      alert('Filled what I could. These fields were not found on this page: ' + missing.join(', '));
    }
  }

  function addButton() {
    if (document.getElementById('sp-paste-all-btn')) return;
    const btn = document.createElement('button');
    btn.id = 'sp-paste-all-btn';
    btn.textContent = 'Paste Ship To (SelectionApp)';
    btn.type = 'button';
    Object.assign(btn.style, {
      position: 'fixed',
      top: '10px',
      right: '10px',
      zIndex: 999999,
      padding: '10px 16px',
      backgroundColor: '#d4a736',
      color: '#000',
      border: 'none',
      borderRadius: '6px',
      fontWeight: 'bold',
      cursor: 'pointer',
      boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
    });
    btn.addEventListener('click', pasteAll);
    document.body.appendChild(btn);
  }

  addButton();
  // StoneProfits swaps tab content via AJAX without a full page reload, so
  // keep re-adding the button if the DOM gets rebuilt.
  const observer = new MutationObserver(addButton);
  observer.observe(document.body, { childList: true, subtree: true });
})();
