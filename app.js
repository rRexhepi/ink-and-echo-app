(() => {
  const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
  const panels = tabs.map(t => document.getElementById(t.getAttribute('aria-controls')));

  function selectTab(target, focus = false) {
    tabs.forEach((tab, i) => {
      const selected = tab === target;
      tab.setAttribute('aria-selected', selected ? 'true' : 'false');
      tab.tabIndex = selected ? 0 : -1;
      panels[i].hidden = !selected;
    });
    if (focus) target.focus();
    const id = target.id.replace(/^tab-/, '');
    if (location.hash !== '#' + id) history.replaceState(null, '', '#' + id);
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', (e) => {
      const i = tabs.indexOf(tab);
      let next = null;
      if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
      else if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
      else if (e.key === 'Home') next = tabs[0];
      else if (e.key === 'End') next = tabs[tabs.length - 1];
      if (next) { e.preventDefault(); selectTab(next, true); }
    });
  });

  // Open the tab from URL hash, or auto-pick by user agent on first load.
  const hash = location.hash.replace(/^#/, '');
  const hashTab = hash && document.getElementById('tab-' + hash);
  if (hashTab) {
    selectTab(hashTab);
  } else {
    const ua = navigator.userAgent;
    let auto = 'ios';
    if (/iPhone|iPad|iPod/.test(ua)) auto = 'ios';
    else if (/Macintosh/.test(ua)) auto = 'macos';
    else if (/Android/.test(ua)) auto = 'android';
    else if (/Windows/.test(ua)) auto = 'windows';
    else if (/Linux/.test(ua)) auto = 'linux';
    const autoTab = document.getElementById('tab-' + auto);
    if (autoTab) selectTab(autoTab);
  }

  // Footer year.
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
